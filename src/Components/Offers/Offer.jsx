import React from 'react'
import "./Offer.css"
import exclusive_image from '../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers' >
      <div className="offer-left">
        <h1>Exclusive</h1>
        <p>ONLY THE BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>

      <div className="offer-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offer