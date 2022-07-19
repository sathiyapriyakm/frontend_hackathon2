import './App.css';
import { Login } from './Login';
import { ForgetPassword } from './ForgetPassword';
import { Register } from './Register';
import { Routes,Route,Navigate} from "react-router-dom";
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import {HomeMainbar} from "./HomeMainbar"
import {AskQuestion} from "./AskQuestion"
import {NotFound} from "./NotFound.js"
import {Tags} from "./Tags.js"
import {Users} from "./Users.js"
import {Questionsbar} from "./Questionsbar.js"
// import {QuestionsDetails} from "./QuestionsDetails.js"


function App() {
  return (
      <>
      <div id="wrapper" style={{width:"100%"}}>
          <Routes>

          <Route path="/Login" element={<Login/>}/>
          {/* <Route path="/Forgot-Password" element={<ForgetPassword/>}/> */}
          <Route path="/Register" element={<Register/>}/>
          <Route path="/" element={<MainBoard flow=""/>}/>
          <Route path="/Tags" element={<MainBoard flow="Tags"/>}/>
          <Route path="/Users" element={<MainBoard flow="Users"/>}/>
          <Route path="/Questionsbar" element={<MainBoard flow="Questionsbar"/>}/>
          {/* <Route path="/Questions/:id" element={<MainBoard flow="QuestionsDetails"/>}/> */}
         <Route path="/AskQuestion" element={<MainBoard flow="AskQuestion"/>}/>
          <Route path="/404-Page" element={<MainBoard flow="404-Page"/>}/>
          <Route path="*" element={<Navigate replace to="/404-Page"/>}/>
          </Routes>
      </div>
 </>
  );
}

export default App; 

function MainBoard({flow}){
  return (
    <div className="App">
       <Navbar/>
       <div className='home-container-1'>
        <Sidebar/>
       <div className='home-container-2'>
          <div >
           <section className="routes-container">
               { 
               {
                    "":<HomeMainbar/>,
                    "AskQuestion":<AskQuestion/>,
                    "Tags":<Tags/>,
                    "Users":<Users/>,
                    "Questionsbar":<Questionsbar/>,
                    // "QuestionsDetails":<QuestionsDetails/>,
                    "404-Page":<NotFound/>,
               }[flow]
               }
            </section>  
            </div>
       </div>
       </div>
    </div>
  );
              }



