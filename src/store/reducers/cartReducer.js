import { ADD_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems:cartItems
}

//sepetin son halini tuttuğumuz yer gönderdiğimiz aksiyona göre
export default function cartReducer( state=initialState,{type,payload} ) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(cartItem => cartItem.product.id === payload.id)
            break;
    
        default:
            break;
    }
}