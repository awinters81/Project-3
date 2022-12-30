import React, { Component }  from 'react';
import ReactDOM from 'react-dom/client';

// Create function
const Login = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    // check if empty then return null
    // if both are populated 
    // 
    // 

  }
  const handleChange = (e) => {
    e.preventDefault();
    
    const cFrom = e.target.id
    switch (cFrom) {
      case 'id-login'       :  
      if (e.target.value.length > 0) {
        alert ('filled');
        break
       } else { 
        alert('empty')
        break
      }
      
      alert ('left login')
      var logId = document.getElementById(cFrom);

      


      // var logTxt = logId.textContent;
       alert(  logId.value);

       break;

      case 'password-login' :  alert ('left password') 

        break;
      
       }
  
  }


  return (
    <div>
      {
   <div className='login-signup-forms'>
   <div className='login-section'>
     <h2 className='page-title'>Login</h2>
     <form className='form login-form' onSubmit={handleSubmit}>
       <div className='main-form'>
         <label htmlFor='id-login'>Email:</label>
         <input className='form-input' type='text' id='id-login' onBlur={handleChange} />
       </div>
       <div className='main-form'>
         <label htmlFor='password-login'>Password:</label>
         <input className='form-input' type='password' id='password-login' onBlur={handleChange} />
       </div>
       <div className='main-form'>
         <button className='main-button' type='submit' >login</button>
       </div>
     </form>
   </div>
   <div className='login-section'>
     <h2 className='page-title'>Signup</h2>
     <form className='form signup-form'>
       <div className='main-form'>
         <label htmlFor='user-signup'>Username:</label>
         <input className='form-input' type='text' id='user-signup' />
       </div>
       <div className='main-form'>
         <label htmlFor='email-signup'>Email:</label>
         <input className='form-input' type='text' id='email-signup' />
       </div>
       <div className='main-form'>
         <label htmlFor='password-signup'>Password:</label>
         <input className='form-input' type='password' id='password-signup' />
       </div>
       <div className='main-form'>
         <button className='main-button' type='submit'>signup</button>
       </div>
     </form>
   </div>
 </div>
      }
    </div>
  )
}

// Export Function 
export default Login