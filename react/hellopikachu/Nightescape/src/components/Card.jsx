import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.image} alt={props.title} />
        <div className='card-content'>
            <h3 className='food-title'>{props.title}</h3>
            <p className='food-price'>{props.price}</p>
        </div>
    </div>
  )
}

export default Card