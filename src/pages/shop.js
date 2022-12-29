import React, { Component }  from 'react';
import ITEMS from './../components/data/items.json';

// Create function


const Shop = () => {

  const shopItems = ITEMS;

  return (
    <div>
    {
      <div className="flex-row">
        {/* repos && repos.map((item) =>  */}
        {ITEMS && ITEMS.map((item) =>
          <div key={item.id}>
            <div className='card'>
              <div>
                <div className='bold'> {item.name} </div>   
                  {item.category} 
                  <br/>
                  {item.brand}
              </div>
              <div key={item.id}>
                <img style={{ width: 250, height:250 }} src={item.image} className="logo" alt=""/>
              </div>
            </div>
          </div>
          )
        }
       </div>
    }  
    </div>
    )
}

// Export Function 
export default Shop
