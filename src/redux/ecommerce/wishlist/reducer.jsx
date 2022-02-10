import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../../actionTypes';

export default function wishlistReducer(state = { list: [] }, action) {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const productsid = action.payload.product.id;
            if (state.list.findIndex(product => product.id === productsid) !== -1) {
                const list = state.list.reduce((cartAcc, product) => {
                    if (product.id === productsid) {
                        cartAcc.push({ ...product })
                    } else {
                        cartAcc.push(product)
                    }
                    return cartAcc
                }, [])

                return { ...state, list }
            }
    
        return { ...state, list: [...state.list, {...action.payload.product}] }

        case REMOVE_FROM_WISHLIST:
            return {
                list: state.list.filter(item => item.id !== action.product_id.id)
            }
            
        default:
    }
    return state;
}
