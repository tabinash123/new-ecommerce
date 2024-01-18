import React, { useContext, useState } from "react";
import "./CSS/ShopCatogery.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
// import all_product from "../Components/Assets/all_product";
import Item from "../Components/items/Item";

const ShoCategory = (props) => {
  const { contextValue } = useContext(ShopContext);
  const { all_product } = contextValue;
 
  const itemsPerClick = 4;

  const [visibleItems, setVisibleItems] = useState(itemsPerClick);
  // Slice the data array based on the number of visible items
  // const visibleData = all_product.slice(0, visibleItems);
  const products = all_product.filter((item) => props.category === item.category)

  const showMoreItems = () => {
    setVisibleItems(prevVisibleItems =>
      Math.min(prevVisibleItems + itemsPerClick, products.length)
    );
  };
    const showLessItems = () => {
    setVisibleItems(prevVisibleItems =>
      Math.max(prevVisibleItems - itemsPerClick, itemsPerClick)
    );
  };

  return (
    <div className="shop-category" >
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {products.slice(0,visibleItems).map((item, idx) => {
          if (true) {
            
            return (
            <Item
              key={idx}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />              
            )
          }
        })}
       
        
      </div>
      <div className="more-less">
         {visibleItems >5 ? (
        <div className="explore-more" onClick={showLessItems}>{`<<`}</div>
      ) : (
          <></>
      )}
      {visibleItems < products.length ? (
        <div className="explore-less" onClick={showMoreItems}> {`>>`}</div>
      ) : (
          <></>
      )}

      
      </div>
      {/* <div className="explore-more">
        Explore More
      </div> */}

    </div>
  );
};

export default ShoCategory;
