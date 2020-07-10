import React from 'react';

import {connect} from 'react-redux';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {createStructuredSelector} from 'reselect'
import {selectHiddenCart} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { HeaderContainer, LogoContaniner, OptionLink, OptionContainer} from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContaniner to='/'>
            <Logo className='logo' />
        </LogoContaniner>

        <OptionContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>

            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>

            {
                currentUser?
                <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT </OptionLink>
                :
                <OptionLink className='option' to='/signin'> SIGN IN</OptionLink>
            }

            <CartIcon />
        </OptionContainer>
        {hidden ? null : <CartDropdown />}
        
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHiddenCart
});

export default connect(mapStateToProps)(Header);