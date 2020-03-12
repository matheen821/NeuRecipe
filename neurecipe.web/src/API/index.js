import axios from "axios";

export const getRecipes = searchKey => {
  const URL =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchKey;
  return axios(URL, {
    method: "GET"
  })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};
