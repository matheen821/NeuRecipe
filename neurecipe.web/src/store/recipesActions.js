import * as API from "../API";

export function getRecipes(searchKey) {
  return dispatch => {
    dispatch(getRecipesBegin());
    return API.getRecipes(searchKey)
      .then(res => {
        dispatch(getRecipesSuccess(res.meals));
        return res.meals;
      })
      .catch(error => dispatch(getRecipesFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const GET_RECIPES_BEGIN = "GET_RECIPES_BEGIN";
export const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCESS";
export const GET_RECIPES_FAILURE = "GET_RECIPES_FAILURE";

export const getRecipesBegin = () => ({
  type: GET_RECIPES_BEGIN
});

export const getRecipesSuccess = recipes => ({
  type: GET_RECIPES_SUCCESS,
  payload: { recipes }
});

export const getRecipesFailure = error => ({
  type: GET_RECIPES_FAILURE,
  payload: { error }
});
