import React, { useContext } from 'react'
import "./item.css"
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';


const Item = (props) => {
  const navigate = useNavigate();


  const switchScreen = (props) => {
    setTimeout(() => {
      navigate(`/product/${Number(props.id)}`);
      window.scrollTo({
        top: 10,
        behavior:'smooth'
      })
      
    }, 200);
  }
  return (
      <div onClick={()=>switchScreen(props)} className='item'>
      <img src={props.image} alt="" />
      <div style={{paddingLeft:"5px"}} >
          <p>{props.name}</p>
          <div className="item-prices">
              <div className="item-price-new">
                 $ {props.new_price}
              </div>       
        </div>
        {/* <div className="addtocart" >
        <button >Add to cart</button>

        </div> */}
      </div>
    </div>
  )
}

export default Item