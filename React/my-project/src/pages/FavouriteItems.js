import React from 'react'
import FavouriteContext from '../store/ContextFavourite'
import { useContext } from 'react'
import ProductList from '../components/product/ProductList'

const FavouriteItems = () => {

    const favouriteContext = useContext(FavouriteContext);

  return (
    <div>
      <ProductList products={favouriteContext.favouriteItems}/>
    </div>
  )
}

export default FavouriteItems
