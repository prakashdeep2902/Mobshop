import { createContext, useContext, useEffect, useReducer } from "react";

import cart_reducer from "../reducer/cart_reducer";

const CartContext = createContext();

// const getlocalcartdata=()=>{

//   let newCartData=localStorage.getItem('prakashcart')
//   console.log(newCartData)

//     console.log(localStorage.getItem('prakashcart'))

//   if(newCartData===[]){

//     return [];

//   }else{

//     return JSON.parse(newCartData);
//   }


// }

const intailState = {

    cart: [],
    // cart:getlocalcartdata(),
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
    
    // 
   
    const clearMyCart=()=>{

        dispatch({ type: "CLEARMYCART" })

    }


    useEffect(()=>{

    dispatch({type:'CART_TOTAL_ITEM'})
    dispatch({type:'CART_TOTAL_PRICE'})
     localStorage.setItem("prakashcart",JSON.stringify(state.cart))
    },[state.cart])
    

    return <CartContext.Provider value={{ ...state, AddToCart, removeProduct,clearMyCart }} >
        {children}
    </CartContext.Provider>

}

const useCartContext = () => {

    return useContext(CartContext)
}
export { CartProvider, useCartContext };