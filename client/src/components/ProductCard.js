import React from "react"

const ProductCard = (props) => {

    return (
        <div>
            <h1>imgen</h1>
            <h1>{props.producto}</h1>
            <h3>props.price</h3>
        </div>
    )

}

export default ProductCard;