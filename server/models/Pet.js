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
    zipCode: {
        type: String,
        required: true,
        minLength: 0,
    },
    contactInfo: {
        type: String,
        required: true,
        minLength: 0
    },
    breedType: {
        type: String
    },
    specialInfo: {
        type: String,
    },
    photos: [{
        type: String,
    }]
})

const Pet = model('Pet', petSchema);

module.exports = Pet;