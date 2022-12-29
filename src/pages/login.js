import React, { Component }  from 'react';




// Create function
const Login = () => {
  return (
    <div>
      {
   <div className='login-signup-forms'>
   <div className='login-section'>
     <h2 className='page-title'>Login</h2>
     <form className='form login-form'>
       <div className='main-form'>
         <label for='id-login'>Email:</label>
         <input className='form-input' type='text' id='id-login' />
       </div>
       <div className='main-form'>
         <label for='password-login'>Password:</label>
         <input className='form-input' type='password' id='password-login' />
       </div>
       <div className='main-form'>
         <button className='main-button' type='submit'>login</button>
       </div>
     </form>
   </div>
   <div className='login-section'>
     <h2 className='page-title'>Signup</h2>
     <form className='form signup-form'>
       <div className='main-form'>
         <label for='user-signup'>Username:</label>
         <input className='form-input' type='text' id='user-signup' />
       </div>
       <div className='main-form'>
         <label for='email-signup'>Email:</label>
         <input className='form-input' type='text' id='email-signup' />
       </div>
       <div className='main-form'>
         <label for='password-signup'>Password:</label>
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