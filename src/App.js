import './App.css';
import { Login } from './Login';
import { ForgetPassword } from './ForgetPassword';
import { Register } from './Register';
import { Routes,Route,Navigate} from "react-router-dom";
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import {HomeMainbar} from "./HomeMainbar"
import {AskQuestion} from "./AskQuestion"


function App() {
  return (
      <>
      <div id="wrapper" style={{width:"100%"}}>
          <Routes>

          <Route path="/Login" element={<Login/>}/>
          {/* <Route path="/Forgot-Password" element={<ForgetPassword/>}/> */}
          <Route path="/Register" element={<Register/>}/>
          <Route path="/" element={<MainBoard flow=""/>}/>
         <Route path="/AskQuestion" element={<MainBoard flow="AskQuestion"/>}/>
           {/* <Route path="/TeacherDetails" element={<MainBoard flow="TeacherDetails"/>}/>
          <Route path="/AddStudent" element={<MainBoard flow="AddStudent"/>}/>
          <Route path="/Tables" element={<MainBoard flow="Tables"/>}/>
          <Route path="/404-Page" element={<MainBoard flow="404-Page"/>}/>
          <Route path="*" element={<Navigate replace to="/404-Page"/>}/>
          <Route path="/Dashboard" element={<Navigate replace to="/"/>}/>
          <Route path="/students/edit/:studentId" element={<MainBoard flow="StudentEdit"/>}/>
          <Route path="/teachers/edit/:teacherId" element={<MainBoard flow="TeacherEdit"/>}/>
          <Route path="/Add-Student" element={<MainBoard flow="AddStudent"/>}/>
          <Route path="/Add-Teacher" element={<MainBoard flow="AddTeacher"/>}/> */}
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
                  //  "TeacherDetails":<TeacherDetails/>,
                  //  "AddStudent":<AddStudent/>,
                  //  "AddTeacher":<AddTeacher/>,
                  //  "404-Page":<NotFound/>,
                  //  "StudentEdit":<StudentEdit/>,
                  //  "TeacherEdit":<TeacherEdit/>,
               }[flow]
               }
            </section>  
            </div>
       </div>
       </div>
    </div>
  );
              }



