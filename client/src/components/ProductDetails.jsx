import React from 'react';
import '../Styles/catalogo.css'


const ProductDetails = ({ thumbnail, title, price, condition, stock, id, warranty, vendidos }) => (


    <div>
        <img className='imagenD' src={thumbnail}></img>

        <h3 >{title}</h3>
        <h4>$ {price}</h4>
        <p className='pp '>Condición: {condition}</p>
        <p className='pp '>Stock disponible: {stock}</p>
        <p className='pp '>Id del articulo: {id}</p>
        <p className='pp '>{warranty}</p>
        <p className='pp '>Articulos vendidos: {vendidos}</p>
    </div>
)

export default ProductDetails;