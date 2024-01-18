import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
      <div className='newsletter'>
          <h1>Get Execlusive Offers On Your Email</h1>
          <p>Suscribe to our newsletter and stay connected</p>
          <form onSubmit={handleSubmit} >
              <input type="email" placeholder='enter your email' />
              <button>Suscribe</button>
          </form>
          
    </div>
  )
}

export default Newsletter