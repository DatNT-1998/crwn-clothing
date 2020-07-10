import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.action';

import {CheckoutItemContainer, ImageContainer, RemoveButtonContainer} from './checkout-item.styles';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {quantity, name, price, imageUrl} = cartItem;
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img alt='item' src={imageUrl} />
        </ImageContainer>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>   
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item =>  dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);