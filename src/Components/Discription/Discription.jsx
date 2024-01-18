import React, { useState } from 'react'
import './Discription.css'

const Discription = ({product}) => {
    const [status, setstatus] = useState("description")
    const updateStatus = (value) =>
    { 
        setstatus(value);
    }
  return (
      <div className='descriptionbox' >
          <div className="descriptionbox-navigator">
              <div className="descriptionbox-nav-box"
                  onClick={(() => setstatus('description'))}
                  style={status==="description"?  {backgroundColor:"navajowhite"}:{}}
              >Descripton</div>
              
              <div className="descriptionbox-nav-box "
                  onClick={(() => setstatus('review'))}
              style={status==="review"?  {backgroundColor:"navajowhite"}:{}}>Review(22)</div>
          </div>
          <div className="descriptionbox-description">
              {status==="description"? (<p>
                 {product.description}
              </p>):(<p>
                  A product review is content that examines the benefits and downsides of a specific product or service. Today, most of these reviews exist online but may also appear in print media.
              </p>)}
              
          </div>
    </div>
  )
}

export default Discription