// import logo from './logo.svg';
import React   from 'react';
import './App.css';
import Navbar  from './components/navbar'
import Footer  from './components/footer'
// import About     from './pages/about'
// import Contact   from './pages/contact'
// import Portfolio from './pages/portfolio'

import Shop    from './pages/shop'
import Reviews from './pages/reviews'
import Login   from './pages/login'

import { useState } from 'react';


function App() {
  // const {portfolio, setPortfolio} = useState('About')      // ES6
  const [shop, setShop] = useState('Shop')      // ES6
  const Render = () => {      
    console.log(shop)                             // ES6
    switch (shop) {
      case 'Shop':
        console.log('Shop')
        return <Shop/>
      case 'Reviews':
        return <Reviews/>
      case 'Login':
        return <Login/>
      default:
        return null
      }

  }

  return (
    <div className="App">
       {/* <   />                     /> self closing */}
       <Navbar show_screen={shop} set_screen={setShop}/>    

       <Render/>
       <Footer/>



    </div>
  );
}

export default App;
