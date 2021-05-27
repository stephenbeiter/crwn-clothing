import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.components';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
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
}

export default App;
