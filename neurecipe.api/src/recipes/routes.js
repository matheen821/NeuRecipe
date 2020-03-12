const express = require("express"),
  router = express.Router(),
  controller = require("./controller");
router.post("/saveRecipe", controller.saveRecipe);
router.get("/getRecipes", controller.getRecipes);
module.exports = router;
