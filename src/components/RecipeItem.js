import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe,removeFavorite } from '../actions';

class RecipeItem extends Component{
  constructor(){
    super();
    this.state = {
      favorited:false
    }
  }

  favorite(recipe) {
    const title = recipe.title;
    if(!this.state.favorited){
      this.props.favoriteRecipe(recipe);
    } else {
      this.props.removeFavorite(title);
    }
    this.setState({favorited:!this.state.favorited});
  }

  render() {
    const { recipe } = this.props;
    return (
      <div className={recipe.thumbnail === ''? 'noRecipe' : 'Recipe'}>
        {
          this.state.favorited?
          <div className='star'
            onClick={() => this.favorite(recipe)}>
            &#9733;
          </div> :
          <div className='star'
            onClick={() => this.favorite(recipe)}>
            &#9734;
          </div>
        }

        <div className='recipeText'>
          <a href={recipe.href}>
            <h3>{recipe.title}</h3>
          </a>
          <p><b>ingredients:</b>{recipe.ingredients}</p>
        </div>
          <img className='recipeImg' src={recipe.thumbnail} alt={recipe.title} />
      </div>
    )
  }
}

export default connect(null, { favoriteRecipe, removeFavorite })(RecipeItem);
