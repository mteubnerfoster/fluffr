const { Schema, model } = require("mongoose");

const petSchema = new Schema({
  petId: {
    type: Number,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: String,
  },

  gender: {
    type: String,
  },

  species: {
    type: String,
  },

  breed: {
    type: String,
  },

  country: {
    type: String,
  },

  state: {
    type: String,
  },

  city: {
    type: String,
  },

  zipCode: {
    type: String,
  },

  linkToPet: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
  },
});

const Pet = model("Pet", petSchema);

module.exports = Pet;
