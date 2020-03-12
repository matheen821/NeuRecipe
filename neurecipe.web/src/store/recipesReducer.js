import {
  GET_RECIPES_BEGIN,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE
} from "./recipesActions";

const initialState = {
  recipes: [],
  isLoading: true,
  error: null
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipes: action.payload.recipes
      };

    case GET_RECIPES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        recipes: []
      };

    default:
      return state;
  }
}
