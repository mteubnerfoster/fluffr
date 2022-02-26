const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    zipCode: {
        type: String,
        minLength: 5,
        maxLength: 10,
    },
    searchDistance: {
        type: Number,
        min: [0, 'must be non negative number']
    },
    favoritedPets: [{
        type: Number,
        ref: 'Pet'
    }],
    petSearchHistory: [{
        type: Number,
        ref: 'Pet'
    }]

});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
