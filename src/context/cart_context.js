import { createContext, useContext, useEffect, useReducer } from "react";

import cart_reducer from "../reducer/cart_reducer";

const CartContext = createContext();


const intailState = {

    cart: [],
 
    totalItem: "",
    total_amount: "",
    shipping_fee: 50000,
}
const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cart_reducer, intailState)
    const AddToCart = (id, color, amount, singleProduct) => {

        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, singleProduct } })

    };

    const removeProduct = (id) => {

        dispatch({ type: "REMOVE_ITEM", payload: id })

    }

    // to add the data in localstorage
    // get vs set 
    
    useEffect(()=>{

        localStorage.setItem("prakashcart",JSON.stringify(state.cart))
    },[state.cart])
    

    return <CartContext.Provider value={{ ...state, AddToCart, removeProduct }} >
        {children}
    </CartContext.Provider>

}

const useCartContext = () => {

    return useContext(CartContext)
}
export { CartProvider, useCartContext };