const { AuthenticationError } = require('apollo-server-express');
const { User, Pet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('favoritePets');
        },
        pet: async (parent, { petId }) => {
            return Pet.findOne({ petId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('favoritePets');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },

        /*params needed 
        required params
        $petId: Int!
        $name: String!
        $linkToPet: String!
        
        optional parameters
        $age: String
        $gender: String
        $species: String
        $breed: String
        $country: String
        $state: String
        $city: String
        $zipCode: String
        $photo: String
        */
        addPet: async (parent, params) => {
            const pet = await Pet.create(params);
            return pet
        },

        addToUserFave: async (parent, { username, petId }, context) => {
            const pet = await Pet.findOne({ petId })
            const user = await User.findOneAndUpdate(
                { username: username },
                {
                    $addToSet: {
                        favoritePets: pet._id
                    }
                })
            return user
        },

        removePet: async (parent, { username, petId }, context) => {
            const pet = await Pet.findOne({ petId })
            await User.findOneAndUpdate(
                { username: username },
                { $pull: { favoritePets: pet._id } }
            );
            return pet
        }

    }
}

module.exports = resolvers;
