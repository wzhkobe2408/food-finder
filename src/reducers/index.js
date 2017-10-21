import { SET_RECIPES, FAVORITE_RECIPE, REMOVE_FAVORITE } from '../actions'
import { combineReducers } from 'redux'

function recipes(state=[],action) {
  switch (action.type) {
    case SET_RECIPES:
      return [...state,...action.payload];
    default:
      return state;
  }
}

function favoriteRecipes(state=[], action) {
  switch (action.type) {
    case FAVORITE_RECIPE:
      return [...state, action.recipe]
    case REMOVE_FAVORITE:
      return state.filter(recipe => recipe.title !== action.title);
    default:
      return state;
  }
}

export default combineReducers({
  recipes,
  favoriteRecipes
});
