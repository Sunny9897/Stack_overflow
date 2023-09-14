import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar/Navbar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { packPayment } from '../actions/payment';
import './Users/paymentpage.css'
import {packAmount} from './Product/pack.js'





const PaymentPage=()=>{
    const Navigate=useNavigate();
    const dispatch = useDispatch();
  const amount= packAmount();
  console.log(amount)

    const user=useSelector((state)=>(state.currentUserReducer))
    const name=user?.result.name;
    const email=user?.result.email;


 const queryParameter=new URLSearchParams(window.location.search)
 const paymentId=queryParameter.get('payment_id')

    const goto=()=>{
        Navigate('/')

    }
   
 function goPayment(){
        dispatch(packPayment(name,email,amount,paymentId,))
        goto()

    }

      
  
    return(

        
    <div id='pay'>
        <Navbar/>
        <div className='payment-container'>
        
        <h4>Your transaction has been successful! with txn. No. :- <span>{paymentId}</span></h4>
        <h4>Please note above refrence number for future refrences.</h4>
        <button onClick={goPayment}>Finise</button>
        </div>
        
       
    </div>


    )
    
       }


export default PaymentPage