import axios from "axios";

export const getRecipeInfo = recipeId => {
  const URL =
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeId;
  return axios(URL, {
    method: "GET"
  })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const saveRecipe = recipe => {
  const URL = "http://localhost:8080/recipes/saveRecipe";
  return axios(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(recipe)
  })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};
export const getRecipes = recipe => {
  const URL = "http://localhost:8080/recipes/getRecipes";
  return axios(URL, {
    method: "GET"
  })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};
