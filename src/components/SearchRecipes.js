import React, { Component } from 'react'
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients:'',
      dish:''
    }
  }
  search(e) {
    e.preventDefault()
    const url = `http://www.recipepuppy.com/api/?i=${this.state.ingredients}&q=${this.state.dish}`;
    this.props.setRecipes(url);
    e.target.reset();
  }

  render() {
    return (
      <Form inline onSubmit={(event) => this.search(event)}>
        <FormGroup>
          <ControlLabel className='lead' >Ingredients</ControlLabel>
          <FormControl
           type='text' placeholder='garlic, chicken'
           onChange = {(e) => this.setState({ingredients:e.target.value})}
            />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel className='lead' >Dish </ControlLabel>
          <FormControl
          type='text' placeholder='adobo'
          onChange = {(e) => this.setState({dish:e.target.value})}
          />
        </FormGroup>
        {' '}
        <Button bsStyle='success' type='submit'>Submit</Button>
      </Form>
    )
  }
}


export default connect(null,{ setRecipes })(SearchRecipes);
