import React from 'react'
import CustomWrapper from '../layouts/CustomWrapper'

function ProductItem (props){
  return (
      <li key={props.item.id}> 
      
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
        </CustomWrapper>

      </li>
  )
}

export default ProductItem
