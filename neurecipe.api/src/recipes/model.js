"use strict";

const mongoose = require("mongoose");
var Schema = mongoose.Schema({
  idMeal: {
    type: String
  },
  strMeal: {
    type: String
  },
  strCategory: {
    type: String
  },
  strArea: {
    type: String
  },
  strTags: {
    type: String
  },
  strMealThumb: {
    type: String
  },
  strInstructions: {
    type: String
  }
});
module.exports = mongoose.model("Recipes", Schema);
