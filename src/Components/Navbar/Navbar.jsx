import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css";
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ShopContext } from './../../Context/ShopContext';
import all_product from './../Assets/all_product';


const Navbar = () => {
    const [menu, setmenu] = useState('shop');
    const navigate = useNavigate();
    const { getTotalCartItem, contextValue, categoty } = useContext(ShopContext);
    
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

    useEffect(() => {
        if (categoty !== "")
        {
            setmenu(categoty);  
        } 
    }, [categoty])
    
    const setUrl = (val) => {
        setmenu(val);
        setTimeout(() => {
            navigate(`/${val}`)
        }, 100)
    }
   
    return (
        <div>
      {isSmallScreen ? (
                // Render rendering navber for small screen <=800px or   
       <div className="navbar">
  <div className="first-part">
    <Link to='/shop' onClick={() => setmenu('shop')}>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>organic Bazar</p>
      </div>
    </Link>
    <div className="nav-logout-cart">
      <Link to='./cart'>
        <img src={cart_icon} alt="cart-icon" />
      </Link>
      <div className='nav-cart-count'>{getTotalCartItem()}</div>
      {/* <Link to='/'>
        <button>Log Out</button>
      </Link> */}
    </div>
  </div>
  
  
  <div className="second-part">
    <ul className="nav-menu">
      <li onClick={() => setUrl("shop")}>Green veg {menu === "shop" ? (<hr />) : <></>}</li>
      <li onClick={() => setUrl("men")}>Dry veg {menu === "men" ? (<hr />) : <></>}</li>
      <li onClick={() => setUrl("women")}>Seasoal {menu === "women" ? (<hr />) : <></>}</li>
      <li onClick={() => setUrl("kids")}>All Time {menu === "kids" ? (<hr />) : <></>}</li>
    </ul>
  </div>
</div>

        
      ) : (
        // Render your navbar for larger screens
         <div className="navbar">
              <Link to='/shop' onClick={(()=>setmenu('shop'))}  >
          <div className="nav-logo">
              <img src={logo} alt="logo" />
              <p>Organic Bazzar</p>
          </div>
          </Link>
          
          <ul className="nav-menu">
              <li onClick={() => {setUrl("shop")}} >
                  Shop {menu === "shop" ? (< hr />) : <></>} </li>
              <li onClick={() => { setUrl("men") }} >Men {menu==="men" ?(< hr/>):<></>} </li>
              <li onClick={()=>{setUrl("women")}} >Women {menu==="women" ?(< hr/>):<></>} </li>
              <li onClick={()=>{setUrl("kids")}} >Kids {menu==="kids" ?(< hr/>):<></>} </li>
          </ul>
          
              <div className="nav-logout-cart">
              <Link to='./cart' >
              <img src={cart_icon} alt="cart-icon" />
              </Link>
              <div className='nav-cart-count' >{getTotalCartItem()}</div>
                  {/* <Link to='/' >
              <button >Log Out</button>
                  </Link> */}
          </div>
    </div>
      )}
    </div>
      
        

     
  )}

export default Navbar