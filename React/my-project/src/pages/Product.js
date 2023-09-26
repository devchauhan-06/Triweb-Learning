import React from 'react'
import ProductList from '../components/product/ProductList'

import { useState } from 'react';
import { useEffect } from 'react';


function Product() {

    let [products, setProducts] = useState([]);
    let [isDataFetching, setisDataFetching] = useState(true);

    useEffect(() => {
        setisDataFetching(true)
        fetch("http://localhost:3004/product")    //GET 
            .then(response => response.json())
            .then(responseData => {
                setisDataFetching(false);
                setProducts(responseData.data)
            })
            .catch(err => console.log(err));

    }, [])



    if (isDataFetching) {
        return <div>
            Data is Loading
        </div>
    }
    return (
        <div>
            <ProductList products={products} />
        </div>
    )
}

export default Product
