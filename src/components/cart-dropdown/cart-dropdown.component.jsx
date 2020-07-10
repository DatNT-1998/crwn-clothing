import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {createStructuredSelector} from 'reselect';

import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import {CartDropdownContainer, CartItemsContainer, EmptyMessgageContainer, CartDropdownButton} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                ) : (
                    <EmptyMessgageContainer> Your cart is empty</EmptyMessgageContainer>
                )
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }
            }>
             GO TO CHECKOUT </CartDropdownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));