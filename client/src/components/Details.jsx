import React, { useEffect } from 'react';
import { getDetails } from '../Redux/Actions/index'
import { useSelector, useDispatch } from "react-redux"
import ProductDetails from './ProductDetails'
import '../Styles/catalogo.css'

const Details = (product) => {

    const dispatch = useDispatch()
    const Details = useSelector(state => state.details)

    useEffect(() => {
        dispatch(getDetails(product.id));
    }, [])
    console.log(Details)
    return (
        <div className='boxd' >
            {
                <ProductDetails
                    thumbnail={Details.thumbnail}
                    title={Details.title}
                    price={Details.price}
                    condition={Details.condition}
                    stock={Details.available_quantity}
                    id={Details.id}
                    warranty={Details.warranty}
                    vendidos={Details.sold_quantity}
                />}
        </div>
    )
}

export default Details;