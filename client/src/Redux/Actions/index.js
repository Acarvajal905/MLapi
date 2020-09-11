import axios from 'axios';


export const GET_PRODUCTS = 'GET_PRODUCTS';

export function getProducts(payload) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/search?query=` + payload)
            .then((res) => res.data)
            .then(data => {
                dispatch({ type: GET_PRODUCTS, payload: data });
                console.log(data);
            })
            .catch(error => alert(error, 'Algo esta saliendo pesimo'))
    }
}