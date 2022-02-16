import {GET_SINGLE_ITEM,DECREMENT_QTY,ADD_TO_CART,GET_LIST,WATCH_PRODUCT_LIST, WATCH_SINGLE_ITEM} from '../../actionTypes'


export const watchfetchProducts = () => ({
    type:WATCH_PRODUCT_LIST
})

export const watchfetchSingleProducts = () => ({
    type:WATCH_SINGLE_ITEM
})

export const fetchProducts = (product) => ({
    type: GET_LIST,
    payload: product 
})

export const getSingleItem = () => ({
    type: GET_SINGLE_ITEM
})

export const addToCart = (product, qty) => ({
    type: ADD_TO_CART,
    payload: { product, qty }
})

export const decrementQty = productId => ({
    type: DECREMENT_QTY,
    productId
})

