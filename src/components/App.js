import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import '../styles/index.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div className='container text-center mt-4'>
        {
          this.props.favoriteRecipes.length === 0?
          <div></div> :
            <Link to='/favorite' className='navLink'>Favorite Recipes</Link>
        }
        <h1>Recipe Finder</h1>
        <SearchRecipes />
        <RecipeList />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    favoriteRecipes:state.favoriteRecipes
  }
}

export default connect(mapStateToProps)(App);
