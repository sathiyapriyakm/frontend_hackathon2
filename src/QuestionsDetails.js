import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { API } from './global';
import { useEffect } from 'react';
import Upvote from './assets/upvote.svg';
import Downvote from './assets/downvote.svg';
import './Questions.css';
import {DisplayAnswer} from './DisplayAnswer';
 import {DisplayComment} from './DisplayComment';
 import Avatar from './Avatar';



export const QuestionsDetails = () => {

    const { id } = useParams()
    const [questionsList, setQuestionsList] = useState([]);
    const getQuestionsList=()=>{
      fetch(`${API}/questionsList`,{
        method:"GET",
      }
      )
      .then((data)=>(data.json()))
      .then((list)=>setQuestionsList(list));
      }   
      console.log(questionsList);
    useEffect(()=>getQuestionsList(),[]);
    
    
    const [Answer, setAnswer] = useState('');
    const [show, setShow] = useState(false)
    const [comment, setComment] = useState('')
    const User = null;
    const navigate = useNavigate();

    const handlePostAns = (e, answerLength) =>{
        e.preventDefault();
        if(User === null){
            alert('Login or Signup to answer a question');
            navigate('/Auth');
        }
        else{
            if(Answer === ''){
                alert('Enter an answer before Submitting')
            } 
            // else{
            //     dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
            // }
        }
    }
    
    const handlePostCom = (e) =>{
        e.preventDefault()
        if(User === null){
            alert('Login or Signup to answer a question');
            navigate('/Auth');
        }
         else{
            if(comment === ''){
                alert('Enter a comment before Submitting')
            }
            //  else {
            //     dispatch(postComment({ id, commentBody: comment, userCommented: User.result.name,  userId: User.result._id}))
            //     setShow(!show)
            // }
        }
    }

    

    const handleShare = () =>{
        // copy(url + location.pathname)
        // alert('Copied URL:' + url + location.pathname);
    }
  
    const handleDelete = () =>{
        // dispatch(deleteQuestion(id, navigate))
    }

    const handleUpVote = () =>{
        // dispatch(voteQuestion(id, 'upVote', User.result._id))
    }

    const handleDownVote = () =>{
        // dispatch(voteQuestion(id, 'downVote', User.result._id))
    }

 
  
    return (
    <div className='question-details-page'>
        {
            questionsList.data === null ? 
            <h1>Loading...</h1> :
            <>
                {
                    questionsList.data.filter(question => question._id === id).map(question =>(
                        <div key={question._id}>
                            <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>
                                <div className='question-details-conatiner-2'>
                                    <div className="question-votes">
                                        <img src={Upvote} alt="" width='20' className='votes-icon' onClick={handleUpVote}/>
                                        <p>{question.upVote - question.downVote}</p>
                                        <img src={Downvote} alt=""  width='20'  className='votes-icon' onClick={handleDownVote}/>
                                    </div>
                                    <div style={{width: "100%"}}>
                                        <p className='question-body'>{question.questionBody}</p>
                                        <div className="question-details-tags">
                                            {
                                                question.questionTags.map((tag) => (
                                                    <p key={tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="question-action-user">
                                            <div>
                                                <button type='button' onClick={handleShare}>Share</button>
                                                {
                                                    User?.result?._id === question?.userId && (
                                                        <button type='button' onClick={handleDelete}>Delete</button>
                                                    )
                                                }
                                            </div>
                                            <div>
                                                <p>asked {moment(question.askedOn).fromNow()}</p>
                                                <Link to={`/Users/${question.userId}`} className='user-link' style={{color: "#0086d8"}}>
                                                    <Avatar backgroundColor="orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>
                                                        {question.userPosted}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <section className='comments'>
                                    <div className="comment">
                                        <section>
                                        <DisplayComment key={question._id} question={question} handlePostCom={handlePostCom}/>
                                       </section>
                                    </div>
                                    <p onClick={() => setShow(!show)} className='comment-main'>Add a comment</p>
                                    {
                                        show && (<div className='comment-title'>
                                        <form onSubmit={(e) => { handlePostCom(e) }}>
                                            <textarea type="text" placeholder="Add Your Comment" cols="30" rows="10" className='comment-textarea' onChange={e => setComment(e.target.value)}></textarea><br/>
                                            <input type="Submit" className='comment-btn'  value='Add Comment'/> 
                                        </form>
                                        </div>)
                                    }
                                </section>

                            </section>
                            {
                                question.noOfAnswers !==0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} Answers</h3>
                                        <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                                    </section>
                                )
                            }
                            <section className='post-ans-container'>
                                <h3>Your Answer</h3>
                                <form onSubmit={ (e)=>  { handlePostAns(e, question.answer.length ) }}>
                                    <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea><br />
                                    <input type="Submit" className='post-ans-btn'  value='Post Your Answer'/>
                                </form>
                                <p>Not the answer you're looking for? Browse other questions tagged
                                    {
                                        question.questionTags.map((tag) => (
                                            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                        ))
                                    } or 
                                    <Link to='/AskQuestion' style={{textDecoration: "none", color: "#009dff"}}> ask your own question.</Link>
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
