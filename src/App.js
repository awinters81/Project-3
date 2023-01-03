// import logo from './logo.svg';


import React   from 'react';
import './App.css';
import Navbar  from './components/navbar'
import Footer  from './components/footer'
import Home    from './pages/home'
import Shop    from './pages/shop'
import Reviews from './pages/reviews'
import Login   from './pages/login'

import { useState } from 'react';


function App() {
  // const {portfolio, setPortfolio} = useState('About')      // ES6
  const [pageSelect, setShop] = useState('Home')      // ES6
  
  const Render = () => {      
    switch (pageSelect) {
      case 'Home'   : return <Home/>
      case 'Shop'   : return <Shop/>
      case 'Reviews': return <Reviews/>
      case 'Login'  : return <Login/>
      default       : return null
    }

  }

  return (
    <div className="App">

       <Navbar show_screen={pageSelect} set_screen={setShop}/>    

       <Render/>
       <Footer/>



    </div>
  );
}

export default App;
