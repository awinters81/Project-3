import React, { Component }  from 'react';
import Shop from "../pages/shop"

// Create function
// props are parameters   1 to infinite....... all parameters are accessed props.(variable)   i.e. promps.set_screen
const Navbar = (props) => {
    const change_screen = (event) => {
        // console.dir(event.target)
        props.set_screen(event.target.textContent)
    }
    return (
        <div>
            <ul className="menuoptions">
                <li><a href='#' onClick={change_screen}>Shop</a></li>
                <li><a href='#' onClick={change_screen}>Reviews</a></li>
                <li><a href='#' onClick={change_screen}>Login</a></li>
            </ul>

        </div>
    )
}

// Export Function 
// module.exports = Navbar
export default Navbar