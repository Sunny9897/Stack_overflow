import React, { useEffect, useState } from 'react'
import './product.css'
import { packPayment } from '../../actions/payment'


import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { packAmount } from './pack.js'



const ProductDetails = () => {

  const navigate=useNavigate()
  const user=useSelector((state)=>(state.currentUserReducer))
  const dispatch=useDispatch();
  const [pack,setPack]=useState('')

  const handlePack=(e)=>{
    setPack(e.target.value)
  }
  const checked=()=>{
    if(document.getElementById('pack-1').checked){
        alert("you have selected free so you dont need to pay")

    }else if(document.getElementById('pack-2').checked){
        dispatch(packPayment(user?.result.name,user?.result.email,100))
    }
    else if(document.getElementById('pack-3').checked){
        alert('you hace selected 1000rs/month')
    }else{
        alert('please select any pack')
    }

}
 
 const handlePay=(e)=>{
  e.preventDefault();
  checked();







//     if(user===null){
//       alert("please login before payment!")
//       navigate('/Auth')
//     }else{
//     e.preventDefault();

//     packAmount(pack);
//     const  script=document.createElement("script");
//     const rzppaymentform=document.getElementById('rzp_payment_form')
//     if(pack==='0'){alert("It's free!..you don't need to pay for it.")} else if(pack==='100'){
//       script.src="https://checkout.razorpay.com/v1/payment-button.js" 
//       script.async=true;
//       script.dataset.payment_button_id="pl_MT0vGS4W1Zq5pi";
//       document.getElementById("pay-btn").disabled=true;
//     document.getElementById("pay-btn").style.backgroundColor='grey';
//     }else if(pack==='1000'){
//       script.src="https://checkout.razorpay.com/v1/payment-button.js"
//        script.dataset.payment_button_id="pl_MT161OQt9ss9fp" 
//        script.async=true;
//        document.getElementById("pay-btn").disabled=true;
//     document.getElementById("pay-btn").style.backgroundColor='grey';
//   }else{alert("It is a base plan. You don't need to pay for it.")}
//     rzppaymentform.appendChild(script);
    

    


// }
 }
   
  return (
    <div className='product-container-1'>
        <h3>StackOverflow provide you these offers to ask-questions.</h3>
        <form id='rzp_payment_form'>
        <div className='radio-button'>
            <input type="radio" name='pack' value='0' id='pack-1'checked={true} onChange={handlePack} />
            <label htmlFor="pack">you can ask one question for free.</label>
            </div>
            <div className='radio-button'>
            <input type="radio" name='pack' value='100' id='pack-2' onChange={handlePack} />
            <label htmlFor="pack">you can ask 5 question for 100rs/month.</label>
            </div>
            <div className='radio-button'>
            <input type="radio" name='pack' value='1000' id='pack-3'onChange={handlePack}/>
            <label htmlFor="pack">you can ask unlimited question for 1000 rs/month.</label>
          </div>
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

          <div className='pay-button'>
            <button type='submit' id="pay-btn" onClick={handlePay}>GO</button>
          </div>
          </form>
        


        </div>

        
      
    
  )
}

export default ProductDetails