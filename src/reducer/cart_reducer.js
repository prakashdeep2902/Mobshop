

const cart_reducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {

        let { id, color, amount, singleProduct } = action.payload

        let cartProduct;
        cartProduct={
            
            id:id+color,
            name:singleProduct.name,
            color,
            amount,
            image:singleProduct.image[0].url,
            price:singleProduct.price,
            max:singleProduct.stock


        }

        return {
            ...state,
            cart: [...state.cart,cartProduct]
        }
    }
    if(action.type==="REMOVE_ITEM"){

        let updatedCart=state.cart.filter((curItem)=>curItem.id!==action.payload);

        return{

            ...state,
            cart:updatedCart
        }

    }
    return state

}

export default cart_reducer
