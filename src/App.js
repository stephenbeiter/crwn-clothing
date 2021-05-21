import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
    <div>
      <h1>
        This is the Hats Page
      </h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route component={HomePage} path='/' exact />
        <Route component={HatsPage} path='/shop/hats' exact />
      </Switch>
    </div>
  );
}

export default App;
