import React from 'react'
import './Card.css'
const Card = ({image,title}) => {
  return (
    <div className='product-card'>
        <img src={image} alt={title} className='product-img' />
        <span>{title}</span>
      
    </div>
  )
}

export default Card
