import {createSelector} from 'reselect';

const selectorCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectorCart],
    cart => cart.cartItems
)

export const selectHiddenCart = createSelector(
    [selectorCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => accumalatedQuantity +  cartItem.quantity
        ,0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => 
            accumalatedQuantity +  cartItem.quantity * cartItem.price
        ,0)
)