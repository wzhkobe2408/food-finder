import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';


class RecipeList extends Component {

  render() {
    const recipeList = this.props.recipes.map((recipe, index) => (
      <RecipeItem
        key={index}
        recipe = {recipe}
      />
    ))
    return (
      <div>
            { recipeList }
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    recipes:state.recipes
  }
}

export default connect(mapStateToProps)(RecipeList);
