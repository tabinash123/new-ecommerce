import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from './../Components/Popular/Popular';
import Offer from '../Components/Offers/Offer';
import Newcollection from '../Components/Newcollections/Newcollection';
import Newsletter from '../Components/Newsletter/Newsletter';
import Footer from './../Components/Footer/Footer';

const Shop = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} >
      <Hero />
      <Popular />    
      <Offer />
      <Newcollection />
      {/* <Newsletter /> */}
    </div>
  )
}

export default Shop