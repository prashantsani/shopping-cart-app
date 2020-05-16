import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Store from './Store';
import Cart from './Cart';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Redirect from='/' to="/shopping-cart-app/" />
    <Switch>
      <Route exact path='/shopping-cart-app/' component={ Store } />
      <Route exact path='/store' component={ Store } />
      <Route exact path='/cart' component={ Cart } />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
)

export default Router; 