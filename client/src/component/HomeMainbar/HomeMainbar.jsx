import React, { useEffect } from 'react'
import {Navigate, useNavigate} from "react-router-dom"
import{useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './HomeMainbar.css'
import Questions from './Questions'
import { updateDate } from '../../actions/auth'
import { updatePack } from '../../actions/auth'
import { getCurrentUser } from '../../actions/users'




const HomeMainbar = () => {


 
  const location=useLocation()
  
  
 
  const User=useSelector((state)=>(state.currentUserReducer))


  


  const navigate=useNavigate()
 
  const dispatch=useDispatch()
 
   
  
  
useEffect(()=>{
  dispatch(getCurrentUser(User?.result._id))
},[dispatch,User?.result._id])
const user=useSelector((state)=>(state.updateUserReducer));
 
  const questionsList=useSelector(state=>state.questionReducer)
  const formateDate=(date)=>{
    const [y,m,d]=date.split('-')
    return new Date(`${y}-${m}-${d}`);

  }
  
 
  
  const checkAuth=()=>{
    if(User==null){
      alert("login or singnup to ask question");
      navigate('./Auth')
    }else{
     
      
    CheckPack()
    }
  }
  
  const CheckPack=()=>{
    dispatch(getCurrentUser(User?.result._id))
    
    console.log(user)
  
     
  
    const userDate=formateDate(user?.data.packJoinedOn);
    const todayDate=formateDate(new Date().toISOString().slice(0,10));
    if(userDate<todayDate){
      dispatch(updateDate(user?.data._id))

    }
    if(userDate>formateDate(user?.data.packEndOn)){
      alert("Your current pack has been expired..You can ask one question in a day!")
      dispatch(updatePack(user?.data._id))
      console.log(user?.data.limitUsed)
      if(user?.data.limit<=user?.data.limitUsed){
        alert("your daily limit has been expired")
        navigate('/')

      }else{
      navigate("/AskQuestion")
      }


    }else{
      const restDay=Math.ceil((formateDate(user?.data.packEndOn)-formateDate(user?.data.packJoinedOn))/(1000*60*60*24));
      console.log(restDay)
      if(restDay<=7){
       alert(`your pack is about to expire within ${restDay} !.....`)
      }
console.log(user?.data.limitUsed)
      if(user?.data.limit<=user?.data.limitUsed){
        alert("your daily limit has been expired")
        navigate('/')

      }else{
      navigate("/AskQuestion")

      }

    }
  }
    
  

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname==='/'?<h1>Top Questions</h1>: <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
        {
        
        }


      </div>
      <div>
        {
           
          questionsList.data===null?
           <h1>Loading...</h1>:
          
            <>
            <p>{questionsList.data.length} questions</p>
            <>{
            questionsList.data.map((question)=>(
                <Questions question={question} key={question._id}/>
    
              ))
        }
        
            
            </>
            </>
            
      
          
          
        }
      </div>

    </div>
  )

      }
export default HomeMainbar