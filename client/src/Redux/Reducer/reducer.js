import {
    GET_PRODUCTS
} from '../Actions/index.js';

const initialState = {
    Products: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: {
            return { ...state, Products: action.payload }
        }
        default:
            return state;
    }
}

export default rootReducer;