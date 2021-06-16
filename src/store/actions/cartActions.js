//Değeri sabit olması için magic string den kurtulmak için
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "ADD_TO_CART"

export function addToCart(product) {
    //bir aksiyon yaptığın zaman bana bir obje gönder
    return {
        //return içerinde bir... olsun.
        type : ADD_TO_CART, //gönderilen aksiyon
        payload: product    //göndermek istediğin değer
        
        
    }
    
}

export function removeFromCart(product) {
    return {
        //return içerinde bir... olsun.
        type :REMOVE_FROM_CART,
        payload: product
        
        
    }
    
}