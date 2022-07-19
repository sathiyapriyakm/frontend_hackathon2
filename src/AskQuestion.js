import React, { useState } from 'react'; 
import './AskQuestion.css';
import  { useNavigate } from 'react-router-dom';
import Background from './assets/background.svg';
import { API } from './global';


export const AskQuestion = () => {

  const [questionTitle, setQuestionTitle] = useState('')
  const [questionBody, setQuestionBody] = useState('')
  const [questionTags, setQuestionTags] = useState('')


  const navigate = useNavigate()

  const qn=()=>navigate(`/`);
  const addQuestion =(question) => {
    console.log(API);
    console.log(question);
    fetch(`${API}/askQuestion`, {
    method: "POST",
    body: JSON.stringify(question),
    headers: {
      "Content-Type" : "application/json",
    },
  }).then((data)=>data.json())
  .then((data1)=>{
      console.log(data1.message);
      if(data1.message==="Question already available"){
          qn();}
      else {
        qn();
      }
  });
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log({ questionTitle, questionBody, questionTags})
    let question={questionTitle:questionTitle,questionBody:questionBody,questionTags:questionTags};
    addQuestion(question);
  }
  
  const handleEnter = (e) =>{
    if(e.key === 'Enter'){
      setQuestionBody(questionBody + "\n")
    }
  }

  return (
    <div className='ask-question'>
      <div className="ask-ques-container">
          <h1>Ask a public Question</h1>
          <img src={Background} alt="" width="500" style={{display: "flex",position: "relative", left: "700px", margin: "0%"}} />
          <form onSubmit={handleSubmit}>
            <div className="ask-form-container">
              <label htmlFor="ask-ques-title">
                  <h4>Title</h4>
                  <p>Be specific and imagine you're asking a question to another person</p>
                  <input type="text" id='ask-ques-title' onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='e.g. Is there an R function for findingthe index of an element in a vector?'/>
              </label>
              <label htmlFor="ask-ques-body">
                  <h4>Body</h4>
                  <p>Include all the information someone would need to answer your question</p>
                  <textarea name="" id="ask-ques-body" onChange={(e) => {setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyPress={handleEnter}></textarea>
              </label>
              <label htmlFor="ask-ques-tags">
                  <h4>Tags</h4>
                  <p>Add up to 5 tags to describe what your question is about</p>
                  <input type="text" id='ask-ques-tags' onChange={(e) => {setQuestionTags(e.target.value.split(" "))}} placeholder='e.g. (xml html android)'/>
              </label>
            </div>
            <input type="submit" value='Post your question' className='review-btn'/>
          </form>
      </div>
    </div>
    )
}
