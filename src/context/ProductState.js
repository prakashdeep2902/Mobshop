import axios from "axios";
import { useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
import productContext from "./productContext";

const API = 'https://api.pujakaitem.com/api/products';

const intialState = {

    isLoading: false,
    isError: false,
    Products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},

}

const ProductState = (props) => {

    // feaching api for product
    const [state, dispatch] = useReducer(reducer, intialState)
    const feachProduct = async (url) => {

        dispatch({ type: "SET_LOADING" })
        try {
            const response = await axios.get(url).catch((err) => {
                console.log("err: ", err)
            });
            const Products = await response.data;
            dispatch({ type: 'SET_API_DATA', payload: Products })
        } catch (error) {

            dispatch({ type: "API_ERROR" })
        }

    }
    // api call for single product
    const getSingleProduct = async (url) => {

        dispatch({ type: "SET_SINGLELOADING" })
        try {
            const response = await axios.get(url).catch((err) => { console.log("err: ", err) });
            const SingleProducts = await response.data;
            dispatch({ type: 'SET_SINGLE_PRODUCT', payload: SingleProducts })
        } catch (error) {

            dispatch({ type: "SINGLE_ERROR" })
        }
    }


    useEffect(() => { 
        feachProduct(API)
    }, [])



    return (

        <productContext.Provider value={{ ...state, getSingleProduct}}>
            {props.children}
        </productContext.Provider>


    )
}
export default ProductState;