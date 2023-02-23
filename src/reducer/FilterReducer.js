const filterReducer = (state, action) => {

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {

                ...state,
                filter_products: action.payload,
                all_product: action.payload
            }

        case "SET_GRIDVIEW":

            return {
                ...state,
                grid_view: true
            }
        case "SET_LIST_VIEW":

            return {

                ...state,
                grid_view: false
            }

        default:
            return state

    }

}
export default filterReducer;