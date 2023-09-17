import React from 'react'
import ProductList from '../components/product/ProductList';

function Product()
{
    let products = [
        {
            id:"p1",
            product_name:"City Tour",
            image:"https://globaltravelexchange.com/public/upload/city/20822/sightseeing/4539_1591615717.jpg",
            description:"It is a good tour",
            price:"20000"
        },
        {
            id:"p2",
            product_name:"Forest Tour",
            image:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/58/39/85.jpg",
            description:"It is a refreshing tour",
            price:"50000"
        }
    ];
    return (
        <div>
            <ProductList products={products}/> 
        </div>
      )
}

export default Product
