import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.components';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={HomePage} path='/' exact />
        <Route component={ShopPage} path='/shop' exact />
        <Route component={AuthPage} path='/auth' exact />
      </Switch>
    </div>
  );
}

export default App;
