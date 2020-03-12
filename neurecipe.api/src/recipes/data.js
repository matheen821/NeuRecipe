"use strict";
const _ = require("lodash");
const Model = require("./Model");

module.exports = {
  getRecipes: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await Model.find();
        return resolve(res);
      } catch (err) {
        return reject(err);
      }
    });
  },
  saveRecipe: input => {
    return new Promise(async (resolve, reject) => {
      try {
        let recipe = await Model(input);
        let res = await recipe.save();
        return resolve(res);
      } catch (err) {
        return reject(err);
      }
    });
  }
};
