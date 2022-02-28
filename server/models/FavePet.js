const { Schema, model } = require('mongoose');

const petSchema = new Schema({
    petId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        min: 0,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true,
    },
    breed: {
        type: String
    },
    location: {
        zipCode: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String
        },
        country: {
            type: String
        },
    },
    linkToPet: {
        type: String,
        required: true,
    },
    photo: [{
        type: String,
    }]
})

const FavePet = model('FavePet', petSchema);

module.exports = FavePet;