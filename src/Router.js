import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Store from './pages/store/Store';
import Cart from './pages/cart/Cart';
import NotFound from './pages/404/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/shopping-cart-app/' component={ Store } />
      <Route exact path='/store' component={ Store } />
      <Route exact path='/cart' component={ Cart } />
      <Route component={ NotFound } />
    </Switch>
    <Redirect from='/' to="/shopping-cart-app/" />
  </BrowserRouter>
)

export default Router; 