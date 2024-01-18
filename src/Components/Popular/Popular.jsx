import React from 'react'
import './Popular.css'
import data_product from './../Assets/data';
import Item from '../items/Item';

const Popular = () => {
  return (
      <div className='popular' >
          <h1>Popular of the week</h1>
          <hr />
          <div className="popular-item">
              {data_product.map((item, idx) => {
                  return <Item
                      key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              })}
      </div>
            
    </div>
  )
} 

export default Popular