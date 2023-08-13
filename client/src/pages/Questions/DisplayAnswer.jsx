import React from 'react'
import Questiondetails from './Questiondetails'
import { Link ,useParams} from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import moment from 'moment'
import Avatar from '../../component/Avatar/Avatar'
import './Question.css'
import { deleteAnswer } from '../../actions/question'
const DisplayAnswer = ({Question,handleShare}) => {
    const dispatch = useDispatch();
    const User = useSelector((state) => state.currentUserReducer);
    const { id } = useParams();


    const handleDelete=(answerId,noOfAnswers)=>{
        dispatch(deleteAnswer(id,answerId,noOfAnswers-1))
    }

  return (
    <div>
        {
            Question.answer.map((ans)=>(
                <div className='display-ans' key={Questiondetails._id}>
                    <p>{ans.answerBody}</p>
                    <div className='question-actions-user'>
                        <div>
                            <button type='button' onClick={handleShare}>Share</button>
                            {
                                                User?.result?._id===ans.userId&&(
                                                    <button type='button' onClick={()=>handleDelete(ans._id,Question.noOfAnswers)}>Delete</button>

                                                )}
                        </div>
                        <div>
                            <p>answered {moment(ans.answeredOn).fromNow()}</p>
                            <Link to={`/User/${Question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                <Avatar backgroundColor="green" px='8px' py='5px'>
                                                    {
                                                    ans.userAnswered.charAt(0).toUpperCase()
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
            ))
        }
    </div>
  )
}

export default DisplayAnswer