import React from 'react'
import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from '../Assets/hero_image.png'
import vegetabel_dashbord from '../Assets/vegetable-dashbord.jpg'
const Hero = () => {
  const scrollDown = () => {
    // window.scrollBy({ top: 200, behavior: 'smooth' });
  }


  return (
    <div className='hero'>
      <img src={vegetabel_dashbord} alt="" />
      {/* <div className="hero-left">
        <h2>NEW ARRIVAL ONLY</h2>
        
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="lgo" />
          </div>
          <p>collections</p>
          <p>for every one </p>
        
        <div className="hero-latest-btn"  >
          <div>Latest collection</div>
          <img src={arrow_icon} alt="icn" />
        </div>
      </div>
      
      <div className="hero-right">
        <img className='hero-right-img' src={vegetabel_dashbord} alt="" /> 

      </div> */}

    </div>
  )
}

export default Hero