import React ,{useState} from 'react'
import { useParams,Link,useNavigate,useLocation } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'


import Avatar from '../../component/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import Questions from './Questions'
import upvote from '../../assest/sort-up.svg'
import downvote from '../../assest/sort-down.svg'
import './Question.css'
import { postAnswer } from '../../actions/question'
import { deleteQuestion ,voteQuestion} from '../../actions/question'



const Questiondetails = () => {
    const{id}=useParams()
    const questionsList=useSelector(state=>state.questionReducer)
    const[Answer,setAnswer]=useState('')
    const User=useSelector((state)=>(state.currentUserReducer))
    const Navigate=useNavigate()
    const dispatch=useDispatch()
    const location=useLocation()
   const url='https://stack-overflow-ecom.onrender.com'
   //const url='http://localhost:3000'
const handlePostAns=(e,answerLength)=>{

    e.preventDefault()
    if(User===null){
alert("Login or Signup to answer a question.")
Navigate('/Auth')
    }else{
        if(Answer==''){
            alert("Entrer an answer before submitting")
        }else{
            dispatch(postAnswer({id,noOfAnswers:answerLength+1,answerBody:Answer,userAnswered:User.result.name,userId:User.result._id}))
            alert("Answer submitted successfully...")
            
        }
    }
}
const handleShare=()=>{
    copy(url+location.pathname)
alert('Copied url : '+url+location.pathname)
}
const handleDelete=()=>{
    dispatch(deleteQuestion(id,Navigate))
}


const handleUpVote=()=>{
    dispatch(voteQuestion(id,'upVote',User.result._id))
}

const handleDownVote=()=>{
    dispatch(voteQuestion(id,'downVote',User.result._id))
}
  return (
    <div className='question-details-page'>
        {
            questionsList.data===null?
            <h1>Loading...</h1>:
            <>
            {
                questionsList.data.filter(Question=>Question._id==id).map(Question=>(
                    <div key={Question._id}>
                        <section className='question-details-container'>
                            <h1>{Question.questionTittle}</h1>
                            <div className='question-details-container-2'>
                                <div className='question-votes'>
                                    <img src={upvote} alt="upvote" width="18" className='votes-icon' onClick={handleUpVote}/>
                                    <p>{Question.upVotes.length-Question.downVotes.length}</p>
                                    <img src={downvote} alt="downvote"  width="18" className ='votes-icon' onClick={handleDownVote}/>
                                </div>
                                <div style={{width:"100%"}}>
                                    <p className='question-body'>{Question.questionBody}</p>
                                    <div className="question-details-tags">
                                        {
                                            Question.questionTags.map((tag)=>(
                                                <p key={tag}>{tag}</p>
                                            )
                                                
                                            )
                                        }
                                    </div>
                                    <div className="question-actions-user">
                                        <div>
                                            <button type='button' onClick={handleShare}>Share</button>
                                            {
                                                User?.result?._id===Question.userId&&(
                                                    <button type='button' onClick={handleDelete}>Delete</button>

                                                )}
                                           
                                        </div>
                                        <div>
                                            <p>asked {moment(Question.postedOn).fromNow()}</p>
                                            <Link to={`/User/${Question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                <Avatar backgroundColor="orange" px='8px' py='5px'>
                                                    {
                                                    Question.userPosted.charAt(0).toUpperCase()
                                                    }
                                                    </Avatar>
                                                    <div>
                                                        {
                                                            Question.userPosted
                                                        }
                                                    </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </section>
                    {Question.noOfAnswers}
                        {
                            Question.noOfAnswers!==0 &&(
                                <section>
                                    <h3>{Question.noOfAnswers} answer</h3>
                                    <DisplayAnswer key={Question._id} Question={Question} handleShare={handleShare}/>
                                </section>
                            )
                        }
                        <section className='post-ans-container'>
                            <h3 className=''>Your Answer</h3>
                            <form  onSubmit={ (e)=>{handlePostAns(e,Question.answer.length)}}>
                                <textarea name="" id="textans" cols="30" rows="10" onChange={e=>setAnswer(e.target.value)}></textarea> <br />
                                <input type="submit" className='post-ans-btn' value="Post Your Answer" />
                            </form>
                            <p>
                                Browser other Question tagged
                                {
                                    Question.questionTags.map((tag)=>(
                                        <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                    ))
                                }or
                                <Link to='/AskQuestion' style={{textDecoration:"none",color:"#009dff" ,padding:"5px"}}>ask your own question</Link>
                            </p>
                        </section>
                    </div>
                ))
            }

            </>
        }

    </div>
  )
}

export default Questiondetails