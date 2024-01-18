import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LoginSignUp from './Pages/LoginSignUp';
import Product from './Pages/Product';
import ShoCategory from './Pages/ShoCategory';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from "./Components/Assets/banner_kids.png"
import Login from './Components/loginsign/Login';


function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Routes>
        {/* <Route path='/' element={< LoginSignUp />} />
        <Route path='/login' element={<Login />} /> */}
        <Route path='/' element={< Shop />} />
        <Route path='/shop' element={< Shop />} />
        <Route path='/men' element={< ShoCategory banner={men_banner} category="men" />} />
        <Route path='/women' element={< ShoCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={< ShoCategory banner={kids_banner} category="kid" />} />
        <Route path='/product' element={< Product />} >
          <Route path=':productId' element={< Product />} />
        </Route>
        
        <Route path='/cart' element={< Cart />} />
  
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
