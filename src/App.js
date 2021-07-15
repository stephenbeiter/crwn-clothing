import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.components';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route component={HomePage} exact path='/' />
          <Route component={ShopPage} path='/shop' />
          <Route
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <AuthPage />
              )
            }
            exact
            path='/auth'
          />
          <Route component={CheckoutPage} exact path='/checkout' />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);