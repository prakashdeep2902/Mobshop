

const cart_reducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {

        let { id, color, amount, singleProduct } = action.payload;

        // let existingProduct = state.cart.find((curItem) => curItem.id === id + color);
        // if (existingProduct) {


        // } else {

        //     let upadatedProduct = state.cart.map((curEle) => {{

        //             if (curEle.id === id + color) {

        //                 let newAmount = curEle.amount + amount
        //                 return {

        //                     ...curEle,
        //                     amount: newAmount
        //                 }
        //             } else {

        //                 return curEle


        //             }

        //         }
        //     });

        //     return {
        //         ...state,
        //         cart: upadatedProduct
        //     }
        // }


        let cartProduct = {

            id: id + color,
            name: singleProduct.name,
            color,
            amount,
            image: singleProduct.image[0].url,
            price: singleProduct.price,
            max: singleProduct.stock


        }

        return {
            ...state,
            cart: [...state.cart, cartProduct]
        }
    }
    if (action.type === "REMOVE_ITEM") {

        let updatedCart = state.cart.filter((curItem) => curItem.id !== action.payload);

        return {

            ...state,
            cart: updatedCart
        }

    }
    if (action.type === 'CLEARMYCART') {

        return {

            ...state,
            cart: []
        }
    }
    if (action.type === 'CART_TOTAL_ITEM') {

        let updatedItemVal = state.cart.reduce((intialvalue, curElem) => {
            let { amount } = curElem;
            intialvalue = intialvalue + amount;
            return intialvalue
        }, 0);
        return {

            ...state,
            totalItem: updatedItemVal
        }
    }
    if(action.type==="CART_TOTAL_PRICE"){

        let totalcartPrice=state.cart.reduce((intialvalue,curElem)=>{
            let{price,amount}=curElem;

            intialvalue=intialvalue+ price * amount;
            return intialvalue
        },0)
        return{

            ...state,
            total_amount:totalcartPrice
        }

    }


    return state

}

export default cart_reducer
