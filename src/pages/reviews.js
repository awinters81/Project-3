import React, { Component }  from 'react';


// Create function
const Reviews = () => {

  return (
    <div>
      {
        <div>
        <form className='reviews-form'>
          <div className='greene-form'>
          <label for='username'>Email</label>
          <input
            type='username'
            className='form-input'
            id='username'
            placeholder='Enter username'
          />
            </div>
            <div className='greene-form'>
            <label for='product'>Product</label>
            <input
                type='product'
                className='form-input'
                id='productsearch'
                placeholder='product'
            />
            </div>
            <div className='greene-form'>
            <label for='review'>Review</label>
            <input
                type='review'
                className='form-input'
                id='review'
                placeholder='review'
            />
            </div>
            <button type='submit' class='main-button' id='submit-btn'>Submit</button>
        </form>  
        </div>
     
      } 

    </div>
    
    )
}

// Export Function 
export default Reviews