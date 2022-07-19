import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './HomeMainbar.css';
import QuestionList from './QuestionList';
import { API } from './global';
import { useState } from 'react';
import { useEffect } from 'react';

export const HomeMainbar = () => {


  const navigate = useNavigate();


//    var questionsList  = [{
//      _id: 1,
//      upVotes: 3,
//      downVotes: 2,
//      noOfAnswers: 2,
//      questionTitle: "What is function?",
//      questionBody: "It meant to be",
//      questionTags: ["java","nodejs","reactjs","mongodb","expressjs"],
//      userPosted: "ashu",
//      userId: 1,
//      askedOn: "Jan 1",
//      answer: [{
//            answerBody: "Answer",
//            userAnswered: "kumar",
//            answeredon: "Jan 2",
//            userId: 2,
//      }]
//    },{
//      _id: 2,
//      upVotes: 3,
//      downVotes: 2,
//      noOfAnswers: 0,
//      questionTitle: "What is function?",
//      questionBody: "It meant to be",
//      questionTags: ["javascript","R","python"],
//      userPosted: "ashu",
//      askedOn: "Jan 1",
//      userId: 1,
//      answer: [{
//          answerBody: "Answer",
//          userAnswered: "kumar",
//          answeredon: "Jan 2",
//          userId: 2,
//    }]
//    },{
//      _id: 3,
//      upVotes: 3,
//      downVotes: 2,
//      noOfAnswers: 0,
//      questionTitle: "What is function?",
//      questionBody: "It meant to be",
//      questionTags: ["javascript","R","python"],
//      userPosted: "ashu",
//      askedOn: "Jan 1",
//      answer: [{
//        answerBody: "Answer",       
//        userAnswered: "kumar",
//        answeredon: "Jan 2",
//        userId: 2,
//  }]
//    }]

const [questionsList, setQuestionsList] = useState([]);
const getQuestionsList=()=>{
  fetch(`${API}/questionList/`,{
    method:"GET",
  }
  )
  .then((data)=>(data.json()))
  .then((list)=>setQuestionsList(list));
  }   
useEffect(()=>getQuestionsList(),[]);

  const askQuestion = () =>{
      navigate('/AskQuestion');
  }


  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        
        <h1>Top Questions</h1>
        
        <button onClick={askQuestion} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p>{questionsList.length} questions</p>
                <QuestionList questionsList={questionsList}/>
          </>
        }
      </div>
    </div>
  )
}
