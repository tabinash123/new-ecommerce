import React from 'react'
import './Loginsignup.css'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    const switchScreen1 = () => { 
        navigate('/shop')
     }

    const switchScreen2 = () => {
        setTimeout(() => {
        navigate('/')
            
        }, 150);
    }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>
          Login
        </h1>
        <form className="loginsignup-fields">
          {/* <input type="text" placeholder='Your name' /> */}
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Passwort' />
        <button onClick={switchScreen1}>Continue</button>
        </form>
        <p className="loginsignup-login">
          No account ? 
          <span onClick={switchScreen1}>SignUp  </span>
          {/* <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use and privacy policy</p>
          </div> */}
        </p>
      </div>
    </div>
  )
}

export default Login