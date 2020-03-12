"use strict";
const _dal = require("./data");

module.exports = {
  getRecipes: async (req, res) => {
    try {
      let recipes = await _dal.getRecipes();
      return res
        .status(200)
        .send({ success: true, message: "", data: recipes });
    } catch (err) {
      let message = err.message ? err.message : err;
      return res
        .status(500)
        .send({ success: false, message: message, data: "" });
    }
  },
  saveRecipe: async (req, res) => {
    try {
      let response = await _dal.saveRecipe(req.body);
      return res.status(200).send({
        success: true,
        message: "Recipe successfully saved!",
        data: response
      });
    } catch (err) {
      let message = err.message ? err.message : err;
      return res
        .status(500)
        .send({ success: false, message: message, data: "" });
    }
  }
};
