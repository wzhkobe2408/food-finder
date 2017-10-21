export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export function setRecipes(url) {
  return dispatch => {
    fetch(url,{method:"GET"})
      .then(response => response.json())
      .then(json => dispatch({
        type:SET_RECIPES,
        payload:json.results
      }));
  }
}

export function favoriteRecipe(recipe) {
  return {
    type:FAVORITE_RECIPE,
    recipe
  }
}

export function removeFavorite(title) {
  return {
    type:REMOVE_FAVORITE,
    title
  }
}
