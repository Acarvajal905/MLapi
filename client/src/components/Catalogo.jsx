import React, { useEffect } from 'react';
import { getProducts } from '../Redux/Actions/index'
import ProductCard from './ProductCard'
import { useSelector, useDispatch } from "react-redux"
import '../Styles/catalogo.css'


const Catalogo = () => {

    const dispatch = useDispatch()
    const Product = useSelector(state => state.currentproduct)
    const Products = useSelector(state => state.products)
    const Page = useSelector(state => state.currentoffset)
    var Sort = useSelector(state => state.currentsort)
    let Condition = useSelector(state => state.condition)
    var Productid = useSelector(state => state.productid)
    // var Condition = useSelector(state => state.condition)

    console.log(Product)
    console.log(Products)
    console.log(Page)
    console.log(Sort)
    console.log(Condition)
    console.log(Products)

    function recarga2() {
        window.location.href = `http://localhost:3000`
    }


    return (
        <div >
            <nav >
                <div >
                    <div className='containeer' >
                        <button class="btn btn-warning" style={{ width: '5rem' }} onClick={() => { recarga2() }}>Home</button>
                        <div className='pages'>
                            <button class="btn btn-warning" style={{ width: '5rem' }} onClick={() => { dispatch(getProducts(Product, Page - 10, Sort)) }}>Prev</button>
                            <button class="btn btn-warning" style={{ width: '5rem' }} onClick={() => { dispatch(getProducts(Product, Page + 10, Sort)) }}>Next</button>
                        </div>
                        <div className='sort'>
                            <button class="btn btn-warning" style={{ width: '9rem' }} onClick={() => { dispatch(getProducts(Product, Page, Sort = 'price_asc')) }}>Menor precio</button>
                            <button class="btn btn-warning" style={{ width: '9rem' }} onClick={() => { dispatch(getProducts(Product, Page, Sort = 'price_desc')) }}>Mayor precio</button>
                        </div>



                        <div class="btn-group">
                            <button class="btn btn-warning" >Condicion</button>
                            <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" onClick={() => { dispatch(getProducts(Product, Page, Sort, Condition = 2230582)) }}>Reacondicionado</a>
                                <a class="dropdown-item" onClick={() => { dispatch(getProducts(Product, Page, Sort, Condition = 2230581)) }}>Usado</a>
                                <a class="dropdown-item" onClick={() => { dispatch(getProducts(Product, Page, Sort, Condition = 2230284)) }}>Nuevo</a>
                            </div>
                        </div>
                    </div>
                    <div className='boxes'>
                        {Products && Products.map(product =>
                            <ProductCard
                                thumbnail={product.thumbnail}
                                title={product.title}
                                price={product.price}
                                id={product.id}

                            />)}
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Catalogo;

