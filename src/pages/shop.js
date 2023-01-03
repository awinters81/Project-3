import React, { Component }  from 'react';
import ITEMS from './../components/data/items.json';

// Create function
function shopDropSelector(){
  const shopCateg = ['xxxxx','yyyyy','zzzzzz'];
  var categDropMenuElem = document.getElementById('category-drop-menu');
  var dropDown = document.createElement('div'); dropDown.setAttribute('id','dropDownMenu-container')
  categDropMenuElem.appendChild(dropDown);
  var dropNameSelect = document.createElement('div'); dropNameSelect.setAttribute('id','dropCategSelect');
  var dropUl = document.createElement('ul'); dropUl.setAttribute('id','dropMenuUL');
  dropDown.appendChild(dropNameSelect);
  dropDown.appendChild(dropUl);
  for(var shpCat of shopCateg){
      var dropElemLi = document.createElement('li');
      dropElemLi.textContent = shpCat; dropElemLi.setAttribute('a','#');
      dropUl.appendChild(dropElemLi);
  }
return categDropMenuElem;
}

const Shop = () => {
  // const categorySelect = () => {
  //   console.log(1)
  //   var showCategoryEl = document.getElementById("category")
  //   cShowCategory = showCategoryEl.innerHTML
  //   alert(cShowCategory)
  // }


  const shopItems = shopDropSelector;

  return (
    <div>
      {/* <div id='category-drop-menu'>{shopItems}</div> */}
    <div id='dropMenu-container'>
      <div className= 'dropMenu-size'>
        <input id='search-items'></input>
        <div id='dropMenuSelect'>
          <ul id='dropMenuUL'> 
              <li className='li-items' a='#' >AA</li>
              <li className='li-items' a='#' >BB</li>
              <li className='li-items' a='#' >CC</li>
              <li className='li-items' a='#' >DD</li>
              <li className='li-items' a='#' >EE</li>
          </ul>
        </div>
      </div>
    </div>

    {/* { */}
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
    {/* }   */}
    </div>
    )
}

// Export Function 
export default Shop
