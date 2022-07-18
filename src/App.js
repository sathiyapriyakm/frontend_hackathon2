import './App.css';

function App() {

  return (
    <div className="App">
    
      <Switch>

      <Route exact path="/">

          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
     
       
        <Route  path="/signup">

        <SignupForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>


        <Route exact path="/question">
        
          <QuestionPage currentUser={currentUser} setCurrentUser={setCurrentUser} question={question} setQuestion={setQuestion}/>
        </Route>
        <Route  path="/answer">
            <AnswerPage question={question} setQuestion={setQuestion} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
           
            </Route>
            <Route  path="/postquestion">
            <PostQuestion question={question} setQuestion={setQuestion} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
           
            </Route>

        
         <Route path="**">
          <NotFound />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
