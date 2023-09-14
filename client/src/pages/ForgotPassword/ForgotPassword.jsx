import React, { useState } from 'react'
import icon from '../../assest/icon.png'
import '../Auth/Auth.css'
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../actions/auth';

const ForgotPassword = () => {
    const [email,setEmail]=useState('');
    const dispatch=useDispatch();
   const  handleReset=(e)=>{
    e.preventDefault();
    if(!email){
        alert('Please enter email')
    }else{
    

       
        dispatch(forgotPassword(email))
    }
    

    }
    

  return (
    <section className='auth-section'>
        <img src={icon} alt='satck overflow' className='login-logo' style={{height:"120px", marginRight:'10%'}}/>
        <div className='reset-container'>
            <form  onSubmit={handleReset}>
        <label htmlFor="email">
                    
                    <h4>Reset Password</h4>
                    <input type="email" name='email' id='email'placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}} />
                </label> 
                <button type='submit' className='handle-reset-btn'>Reset Password </button>
                </form>
                </div>
        
    </section>
  )
}

export default ForgotPassword