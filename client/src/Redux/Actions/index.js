import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_CONDITION = 'GET_CONDITION'
export const GET_DETAILS = 'GET_DETAILS'

export function getProducts(payload = 'camiseta', offset = 0, sort, condition = 2230284) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/search?query=${payload}&offset=${offset}&sort=${sort}&ITEM_CONDITION=${condition}`)
            .then((res) => res.data)
            .then(data => {
                dispatch({ type: GET_PRODUCTS, payload: data });
                // console.log(data);
            })
            .catch(error => alert(error))
    }
}
export function getDetails(payload) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/items/${payload}`)
            .then((res) => res.data)
            .then(data => {
                dispatch({ type: GET_DETAILS, payload: data });
                console.log(data);
            })
            .catch(error => alert(error))
    }
}
// export function getCondition(payload, offset = 0, sort, condition) {
//     return function (dispatch) {
//         axios.get(`http://localhost:3001/api/search/condition?query=${payload}&offset=${offset}&sort=${sort}&ITEM_CONDITION=${condition}`)
//             .then((res) => res.data)
//             .then(data => {
//                 dispatch({ type: GET_CONDITION, payload: data });
//                 console.log(data);
//             })
//             .catch(error => alert(error))
//     }
// }