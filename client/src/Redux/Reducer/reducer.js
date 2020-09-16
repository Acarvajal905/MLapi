import { GET_PRODUCTS, GET_DETAILS } from "../Actions/index";

const initialState = {
    currentproduct: "",
    products: '',
    currentoffset: "0",
    currentsort: '',
    condition: '',
    details: [],
    productid: ''

}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                currentproduct: action.payload.query,
                products: action.payload.results,
                currentoffset: action.payload.paging.offset,
                currentsort: action.payload.sort.id,
                condition: action.payload.filters[0].values[0].id,
                productid: action.payload.results.id

            }
        }
        case GET_DETAILS: {
            return {
                ...state,
                details: action.payload

            }
        }
        // case GET_CONDITION: {
        //     return {
        //         ...state,
        //         currentproduct: action.payload.query,
        //         products: action.payload.results,
        //         currentoffset: action.payload.paging.offset,
        //         currentsort: action.payload.sort.id,
        //         condition: action.payload.filters[0].values[0].id
        //     }
        // }

        default:
            return state;
    }
}


export default rootReducer;