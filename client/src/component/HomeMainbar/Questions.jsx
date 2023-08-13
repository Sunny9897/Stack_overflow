import React from 'react'
import {Link} from 'react-router-dom'
import './HomeMainbar.css'
import moment from'moment'
const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
        <div className='display-vote-ans'>
            <p>{question.upVotes.length-question.downVotes.length}</p>
            <p>votes</p>
        </div>
        <div className='display-vote-ans'>
            <p>{question.noOfAnswers}</p>
            <p>answers</p>
        </div>
        <div className='display-question-details'>
            
            <Link to={`/Questions/${question._id}`} className='question-title-link'>{question.questionTittle}</Link>
            <div className='display-tag-time'>
           
                <div className='display-tags'>
                    {
                        question.questionTags.map((tag)=>(
                            <p key={tag}>{tag}</p>
                        ) )
                    }
                </div>
                <p className='display-time'>
                    asked on &nbsp;{moment(question.postedOn).fromNow()}&nbsp;{ question.userPosted}
                </p>
                
            </div>
        </div>
    </div>
  )
}

export default Questions