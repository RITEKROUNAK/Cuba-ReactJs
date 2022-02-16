import {DECREMENT_QTY,REMOVE_FROM_CART,ADD_TO_CART} from '../../actionTypes'

export const addToCart = (product, qty) =>  {
    return{
        type: ADD_TO_CART,
        payload: { product, qty }
    }
}

export const removeFromCart = product_id => ({
    type: REMOVE_FROM_CART,
    product_id
})

export const decrementQty = productId => ({
        type: DECREMENT_QTY,
        productId
})
