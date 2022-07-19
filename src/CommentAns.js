import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API } from './global';
import { useEffect } from 'react';

export const CommentAns = (props) => {

    const [showw, setShoww] = useState(false)
    const [comment, setComment] = useState('')
    const navigate = useNavigate();
    const User = null;

    const [questionsList2, setQuestionsList] = useState([]);
    const { id } = useParams();
    const getQuestionsList=()=>{
        fetch(`${API}/questionsList`,{
          method:"GET",
        }
        )
        .then((data)=>(data.json()))
        .then((list)=>setQuestionsList(list));
        }   
        console.log(questionsList2);
      useEffect(()=>getQuestionsList(),[]);

    const handlePostComment = (e) =>{
        e.preventDefault()
        if(User === null){
            alert('Login or Signup to answer a question');
            navigate('/Auth');
        } else{
            if(comment === ''){
                alert('Enter a comment before Submitting')
            } 
            // else {
            //     dispatch(postCommentans({ id, ansId: props.ansid, commentBody: comment, userCommented: User.result.name,  userId: User.result._id}))
            //     setShoww(!showw)
            // }
        }
    }

  return (
    <div>
       {
    questionsList2.data === null ?
        null :
        <>{
                questionsList2.data.filter(question => question._id === id).map(question => (
                    <div key={question._id}>
                       <p onClick={() => setShoww(!showw)} className='comment-main'>Add a comment</p>
                            {
                                showw && (<div className='comment-title'>
                                <form onSubmit={(e) => { handlePostComment(e) }}>  
                                    <textarea type="text" placeholder="Add Your Comment" cols="30" rows="10" className='comment-textarea' onChange={(e) => setComment(e.target.value)}></textarea><br/><br/>
                                    <input type="Submit" className='comment-btn'  value='Add Comment'/> 
                                </form>
                                </div>)
                            }
                    </div>
                ))
            }</>
}
    </div>
  )
}


