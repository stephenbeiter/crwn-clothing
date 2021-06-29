import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import { HeaderContainer, LogoContainer, LogoTitleContainer, OptionsContainer, OptionsLink, OptionsDiv } from './header.styles';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
      <LogoTitleContainer>CRWN</LogoTitleContainer>
    </LogoContainer>
    <OptionsContainer>
      <OptionsLink to='/shop'>
        SHOP
      </OptionsLink>
      <OptionsLink to='/contact'>
        CONTACT
      </OptionsLink>
      {currentUser ? (
        <OptionsDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionsDiv>
      ) : (
        <OptionsLink to='/auth'>
          SIGN IN
        </OptionsLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);