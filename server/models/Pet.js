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
    animalType: {
        type: String,
        required: true,
    },
    breedType: {
        type: String
    },
    zipCode: {
        type: String,
        required: true,
        minLength: 0,
    },
    linkToPet: {
        type: String,
        required: true,
    },
    photos: [{
        type: String,
    }]
})

const Pet = model('Pet', petSchema);

module.exports = Pet;