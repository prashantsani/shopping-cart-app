import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Store from './Store';
import Cart from './Cart';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Store } />
      <Route exact path="/cart" component={ Cart } />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
)

export default Router; 