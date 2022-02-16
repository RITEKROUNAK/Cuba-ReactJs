import {
    ADD_TO_CART,
    DECREMENT_QTY,
    REMOVE_FROM_CART,
} from '../../actionTypes';

const INIT_STATE = {
    cart: [],
};
export default (state = INIT_STATE, action) => {

    switch (action.type) {
        
        case ADD_TO_CART:
        const productId = action.payload.product.id
        if (state.cart.findIndex(product => product.id === productId) !== -1) {
            const cart = state.cart.reduce((cartAcc, product) => {
                if (product.id === productId) {
                    cartAcc.push({ ...product, qty: product.qty + 1, sum: (product.price) * (product.qty + 1) }) 
                } else {
                    cartAcc.push(product)
                }
                return cartAcc
            }, [])

            return { ...state, cart }
        }

        return { ...state, cart: [...state.cart, { ...action.payload.product, qty: action.payload.qty, sum: (action.payload.product.price) * action.payload.qty }] }

        case DECREMENT_QTY:
            if (state.cart.findIndex(product => product.id === action.productId) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === action.productId && product.qty > 1) {
                        cartAcc.push({ ...product, qty: product.qty - 1, sum: (product.price) * (product.qty - 1) }) 
                    } else {
                        cartAcc.push(product)
                    }
                    return cartAcc
                }, [])

                return { ...state, cart }
            }

        return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, sum: action.product.price * action.qty }] }
        

        case REMOVE_FROM_CART:
            return {
                cart: state.cart.filter(item => item.id !== action.product_id.id)
            }
            
        default:
            return state;
    }
}