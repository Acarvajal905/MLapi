import React, { Component } from "react"
//Containers (Componentes tontos)
import ProductCard from "./ProductCard"
import ProductDetails from "./ProductDetails"
import SearchBar from './SearchBar'
import Catalogo from './Catalogo'

class Product extends Component {

    render() {
        return (
            <div>
                {/* <Catalogo /> */}
                <SearchBar />
                <ProductCard producto="detalles" />
                <ProductDetails producto="carta" />
            </div>
        )
    }
}

export default Product;