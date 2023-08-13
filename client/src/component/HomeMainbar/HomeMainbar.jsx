import React from 'react'
import {useNavigate} from "react-router-dom"
import{useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './HomeMainbar.css'
import Questions from './Questions'




const HomeMainbar = () => {


 
  const location=useLocation()
  const user=useSelector((state)=>(state.currentUserReducer))
  const navigate=useNavigate()
  const questionsList=useSelector(state=>state.questionReducer)
  
  const checkAuth=()=>{
    if(user==null){
      alert("login or singnup to ask question");
      navigate('./Auth')
    }else{
      navigate("/AskQuestion")
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname==='/'?<h1>Top Questions</h1>: <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>


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