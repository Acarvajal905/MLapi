import React, { Component } from "react"
import { Route } from "react-router-dom"
// import ProductCard from "./ProductCard"
// import ProductDetails from "./ProductDetails"
import SearchBar from './SearchBar'
import Catalogo from './Catalogo'
import Details from './Details'
import ProductDetails from './ProductDetails'





class Product extends Component {


    render() {
        return (
            <div style={{ backgroundColor: 'black' }}>

                <SearchBar />
                <Catalogo />
                <Route
                    path='/details/:id'
                    render={({ match }) => <Details id={match.params.id} />}
                />

                {/* <ProductCard producto="detalles" />
                <ProductDetails producto="carta" /> */}
            </div>

        )
    }
}

export default Product;
