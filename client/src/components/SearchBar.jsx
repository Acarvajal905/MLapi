import React, { useState } from 'react';
import { getProducts } from '../Redux/Actions/index';
import { useDispatch } from 'react-redux';
import '../Styles/searchbar.css'

export default function SearchBar() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function submitSearch(e, data) {
        e.preventDefault();
        dispatch(getProducts(data))


    }

    return (

        <div className='test'>
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline" onSubmit={(e) => submitSearch(e, input)}>
                    <input class="form-control mr-sm-2" type="text" onChange={(e) => setInput(e.target.value)} placeholder="Buscar" />
                    <input class="btn btn-outline-warning button" type="submit" value="Buscar" style={{ width: '9rem' }} />
                </form>

            </nav>

        </div>
    )

}