import React, { useState } from 'react';
import { getProducts } from '../Redux/Actions/index';
import { useDispatch } from 'react-redux';



export default function SearchBar() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function submitSearch(e, data) {
        e.preventDefault();
        dispatch(getProducts(data))

    }

    return (

        <form onSubmit={(e) => submitSearch(e, input)}>
            <input className="form-control mr-sm-2" type="search" aria-label="Search" onChange={(e) => setInput(e.target.value)} placeholder="Cerveza..." />
            <button type="submit" class="btn btn-outline-warning"
            >BUSCAR</button>
        </form>

    )

}