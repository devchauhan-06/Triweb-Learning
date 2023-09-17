import React from 'react'

function ProductItem (props){
  return (
      <li key={props.item.id}> 
      
        <div>

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
        </div>

      </li>
  )
}

export default ProductItem
