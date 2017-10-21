import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';

class FavoriteRecipes extends Component {
  render() {
    const favoriteRecipes = this.props.favoriteRecipes.map((recipe,index) => (
      <RecipeItem
        key={index}
        recipe={recipe}
      />
    ))
    return (
      <div className='favoriteRecipes container text-center mt-4'>
        <Link to='/' className='navLink'>Home Page</Link>
        <h1>Favorite Recipes</h1>
        { favoriteRecipes }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    favoriteRecipes:state.favoriteRecipes
  }
}

export default connect(mapStateToProps)(FavoriteRecipes);
