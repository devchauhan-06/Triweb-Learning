import React from 'react'
import CustomWrapper from '../layouts/CustomWrapper'
import Styles from './ProductItem.module.css'
import FavouriteContext from '../../store/ContextFavourite'
import { useContext } from 'react'

function ProductItem(props) {

  const favouriteContext = useContext(FavouriteContext);

  const isFavourite = favouriteContext.isFavouriteItem(props.item._id)

  const toggleFavourite = () => {
    if (isFavourite) {
      favouriteContext.removeFavouriteItem(props.item._id)
    }
    else {
      favouriteContext.addFavouriteItem({ ...props.item })
    }
  }
  return (
    <li key={props.item._id}>

      <CustomWrapper>

        <div>
          <img src={props.item.image} alt="Nothing" />
        </div>

        <div>
          <h2>{props.item.product_name}</h2>
          <p>{props.item.description}</p>
          <h4>{props.item.price}</h4>
        </div>
        <div>
          <button>Purchase</button>
        </div>
        <div>
          <button className={isFavourite?Styles.heartFvrt:Styles.heartUnfvrt} onClick={toggleFavourite}></button>
        </div>
      </CustomWrapper>

    </li>
  )
}

export default ProductItem
