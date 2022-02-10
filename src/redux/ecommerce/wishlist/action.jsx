import {REMOVE_FROM_WISHLIST} from '../../actionTypes'
export const removeFromWishlist = product_id => ({
        type: REMOVE_FROM_WISHLIST,
        product_id
})