import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import FavoriteRecipes from './components/FavoriteRecipes';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducers, applyMiddleware(thunk));
render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/favorite' component={FavoriteRecipes} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
