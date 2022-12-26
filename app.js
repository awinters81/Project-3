// import logo from './logo.svg';
import React  from 'react';
import './App.css';
import Navbar    from './components/navbar'
import Footer    from './components/footer'
import About     from './pages/about'
import Contact   from './pages/contact'
import Portfolio from './pages/portfolio'

import { useState } from 'react';


function App() {
  // const {portfolio, setPortfolio} = useState('About')      // ES6
  const [portfolio, setPortfolio] = useState('About')      // ES6
  const Render = () => {      
    console.log(portfolio)                             // ES6
    switch (portfolio) {
      case 'About':
        console.log('About')
        return <About/>
      case 'Contact':
        return <Contact/>
      case 'Portfolio':
        return <Portfolio/>
      default:
        return null
      }

  }

  return (
    <div className="App">
       {/* <   />                     /> self closing */}
       <Navbar show_screen={portfolio} set_screen={setPortfolio}/>    

       <Render/>
       <Footer/>



    </div>
  );
}

export default App;
