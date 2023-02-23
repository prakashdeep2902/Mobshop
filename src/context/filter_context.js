import { createContext, useContext, useEffect, useReducer } from "react";
import productContext from "./productContext";

import reducer from "../reducer/FilterReducer";
const FilterContext = createContext();
const intialState = {

    filter_products: [],
    all_product: [],
    grid_view: false
}

export const FilterProvider = ({ children }) => {

    const context = useContext(productContext)
    const [state, dispatch] = useReducer(reducer, intialState);
    // to set the grid view

    const setGridView=()=>{

        return dispatch({type:"SET_GRIDVIEW"})
    }

    const setListView=()=>{

        return dispatch({type:"SET_LIST_VIEW"})
    }
    useEffect(() => {

        dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: context })
    }, [context])

    return (<FilterContext.Provider value={{ ...state,setGridView,setListView }}>
        {children}
    </FilterContext.Provider>);
};

export const useFilterContext = () => {

    return useContext(FilterContext);
}