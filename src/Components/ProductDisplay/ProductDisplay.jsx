import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import Alert from './../Alert/Alert';

const ProductDisplay = ({ product }) => {
  const { setcategoty, contextValue,cartItem,addToCart} = useContext(ShopContext);
    const [showAlert, setShowAlert] = useState(false);
 
  const handleAddToCart = (e) => {
    addToCart(e);
        setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide the alert after 3 seconds
  };
  setcategoty(product.category)
  // useEffect(() => {
  //   console.log(cartItem[product.id]);
    
  // }, [cartItem])
  


  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        
        <div className="productdisplay-img">
          <img src={product.image} alt="" className="productdispaly-main-img" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(22)</p>
        </div>
        <div className="productdisplay-right-price">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
          {/* </div> */}
        </div>
        <div className="productdisplay-right-description">
         {product.sub_description}
        </div>
        {/* <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="prooductdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div> */}
        {/* <button
          onClick={()=>{handleAddToCart(product.id)}}
        >Add to cart</button> */}
              {showAlert && <Alert message="Item is added to cart" type="success" />}

        <p className="productdisplay-right-category">
          <span>Cagegory :</span> Local, Organic production, no chemicals
        </p>

        <p className="productdisplay-right-category">
          <span>Conntact :</span> 987676753 , 0123243
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
