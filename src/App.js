import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.components';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={HomePage} path='/' exact />
        <Route component={ShopPage} path='/shop' exact />
      </Switch>
    </div>
  );
}

export default App;
