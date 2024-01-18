import React, { useContext, useEffect, useState } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItem = () => {
    const { contextValue, cartItem,addToCart, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
    const { all_product } = contextValue;
    const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    // Set initial size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    
  return (
      <div className="cartitem">
          <div className="cartitem-format-main">
              <p>Products</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Add</p>
              <p>Remove</p>
          </div>
          <hr />
          {all_product.map((e,i) => {
              if (cartItem[e.id]>0)
              {
                  return (
                      <div key={i}>
              <div className="cartitem-format cartitem-format-main">
                  <img src={e.image} alt="" className="carticon-product-icon" />
                 {isSmallScreen? (<p>{e.name}</p>):(<p>{e.name}</p>)}
                              
                  <p>{e.new_price}</p>
                  <button className="cartitem-quantity">{cartItem[e.id]}</button>                  
                  <p>${e.new_price*cartItem[e.id]}</p>
                  <button className="cartitem-add" onClick={(()=>addToCart(e.id))} >+</button>                  
                  <img src={remove_icon} alt="" className='cartitem-remove-icon' onClick={(()=>{removeFromCart(e.id)})} />
                          </div>
                          <hr />
          </div>
                  )
              }
              return null
          })}
          <div className="cartitem-down">
              
               {/* area for  for promo code */}
               {/* <div className="cartitem-promocode">
                  <p>If ou have a promo code,Enter it here</p>
                  <form onSubmit={((e)=>e.preventDefault())} className="cartitem-promobox">
                      <input type="text" placeholder='enter your promo code' />
                      <button  >Submit</button>
                  </form>
              </div> */}
              <div className="cartitem-total">
                  <h1> Total Amount</h1>              
                  <div>
                      <div className="cartitem-total-item">
                          <p>Subtotal</p>
                          <p>${getTotalCartAmount()}</p>
                      </div>
                      <hr />
                      <div className="cartitem-total-item">
                          <p>Shipping fee</p>
                          <p>free</p>
                      </div>
                      <hr />
                      <div className="cartitem-total-item">
                          <h3>Total</h3>
                          <h3>${getTotalCartAmount()}</h3>

                      </div>
                  </div>
                  <button onClick={(()=>getTotalCartAmount())} >Confirm your order</button>
              </div>
             
          </div>      
    </div>
  )
}

export default CartItem