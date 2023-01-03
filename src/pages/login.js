import React, { Component }  from 'react';
import ReactDOM from 'react-dom/client';
import validator from 'validator'
// import 

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

       alert(  logId.value);

       break;

      case 'password-login' :  alert ('left password') 

        break;
       }
  
  }

  
 function switchform (e) { 

  const displayElem = e.target.id;
  console.log(displayElem);
  var logElem = document.getElementById('input-forms-login');
  var signElem= document.getElementById('input-forms-signup');


  if (displayElem === 'login-title'){
    
    logElem.style.display = "block";
    signElem.style.display = "none"
  } else {
    logElem.style.display = "none";
    signElem.style.display = "block";
  }



}
  //   var placeHldrEmail = userEmail.getAttribute('placeholder');
  //   var userLbl = document.getElementById('userLabel');

  //   var passLogin = document.getElementById('password-login');
  //   var passLoginLbl = document.getElementById('pass-label-log');
  //   var placeHldrPass = passLogin.getAttribute('placeholder');  

  //   var passConfirm = document.getElementById('password-confirm');
  //   var passConfLbl = document.getElementById('pass-label-conf');
  //   var placeHldrConf = passConfirm.getAttribute('placeholder'); 

  //   var submitBtn = document.getElementById('submit-button');
 

 
  //   switch (e) {
  //     case 'login' :  
        
  //       placeHldrEmail.setAttribute('Enter Email ID : ');
  //       userLbl.textContent = 'User ID :';
  //       placeHldrPass.setAttribute('Enter Password');
  //       passLoginLbl.textContent = 'Password :';
  //       submitBtn.textContent = 'Login';
  //       passConfLbl.style.display = 'none';
  //       break
  //     case 'signup' :  
  //      } else { 
  //       placeHldrEmail.setAttribute('New Email ID :');
  //       userLbl.textContent = 'Create New ID :';
  //       placeHldrPass.setAttribute('Create Password');
  //       passLoginLbl.textContent = 'New Password :';
  //       submitBtn.textContent = 'Sign Up';
  //       passConfLbl.style.display = 'flex';
  //       placeHldrConf.setAttribute = 'Confirm Password';


  //       submitBtn.textContent = 'Sign Up';
      
  //     }

  //   }
  // }






  // Email Validator
  /* const [emailError, setEmailError] = useState('') */
  const validateEmail = (e) => {
    var email = e.target.value

    var valemailEl = document.getElementById('emailMessage')

    if (validator.isEmail(email)) {
      // setEmailError('Valid Email :)')
      // alert('Valid Email :)')
      valemailEl.innerHTML = ''
    } else {
      // setEmailError('Enter valid Email!')
      // alert('Please enter valid Email!')
      valemailEl.innerHTML = 'Invalid Email!'

    }
  }
  // Email Validator
  // $('.saveBtn').on('click', function() {
  //   // get nearby values
  //   var value = $(this)
  //     .siblings('.description')
  //     .val();
  //   var time = $(this)
  //     .parent()
  //     .attr('id');

  //   // save in localStorage
  //   localStorage.setItem(time, value);

  //   // Show notification that item was saved to localStorage by adding class 'show'
  //   $('.notification').addClass('show');

  //   // Timeout to remove 'show' class after 5 seconds
  //   setTimeout(function() {
  //     $('.notification').removeClass('show');
  //   }, 5000);
  // });

  return (
    <div className='react-container'>
         <div id='form-switch'>
              <h2 id='login-title'  onclick={(strID) =>switchform(strID)}>Login</h2>
              <h2 id='signup-title' onclick={(strID) =>switchform(strID)}>Signup</h2>
            </div>
        <div id='input-forms-login'>
        <h2 className='page-title'>Login</h2>
            <form className='whole-form' onSubmit={handleSubmit}>
              <div className='main-form'>
                  <label htmlFor='id-login'>Email:</label>
                  {/* 1) <input className='form-input' type='text' id='id-login' onBlur={handleChange} /> */}
                  <input className='form-input' inputTest = 'reset' type='text' id='userEmail' placeholder='Enter Email' onBlur={(e) => validateEmail(e)} />
              </div>
              {/* <span id='emailMessage' style={{fontWeight: 'bold', color: 'red', width: 50 }}></span> */}
              <div className='main-form'>
                  <label htmlFor='password-login'>Password:</label>
                  <input className='form-input' inputTest = 'reset' type='password' id='password-login' placeholder='Enter Password' onBlur={handleChange} />
              </div>
              <div className='sign-log-button'>
                  <button className='form-button' id='signin-button' type='submit' >login</button>
              </div>
          </form>  
        </div>

        <div id='input-forms-signup'>
          <h2 className='page-title'>Signup</h2>
          <form className='whole-form'>
              <div className='main-form'>
                  <label htmlFor='email-signup'>Create New ID:</label>
                  <input className='form-input' inputTest = 'reset' type='text' id='email-signup' placeholder='New Email'/>
              </div>
              <div className='main-form'>
                  <label htmlFor='password-signup'>Password:</label>
                  <input className='form-input' inputTest = 'reset' type='password' id='password-signup' placeholder='Create Password'/>
              </div>
              <div className='main-form pass-confirm'>
                  <label htmlFor='password-signup'>Password:</label>
                  <input className='form-input' inputTest = 'reset' type='password' id='password-confirm' placeholder='Confirm Password' />
              </div>
              {/* <br></br> */}
              <div className='sign-log-button'>
                  <button className='form-button' id='signup-button' type='submit'>signup</button>
              </div>
          </form>
        </div>
    </div>
  )
}

// Export Function 
export default Login
