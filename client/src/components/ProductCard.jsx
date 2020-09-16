import React from "react"
import { Link } from 'react-router-dom'
import '../Styles/catalogo.css'

const ProductCard = ({ thumbnail, title, price, id }) => {

    function recarga() {
        window.location.href = `http://localhost:3000/details/${id}`
    }
    return (
        <div className="box">
            <div >

                <Link to={`/details/${id}`} >
                    <img className='imagenF' onClick={() => recarga()} src={thumbnail}  ></img>
                </Link>
                <Link to={`/details/${id}`} >
                    <h5 onClick={() => recarga()} >{title}</h5>
                </Link>
                <p > ${price}</p>

            </div>
        </div>
    )

}

export default ProductCard;

