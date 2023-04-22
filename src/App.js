// import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 import About from './components/About';
import './index.css';
import React, { useState } from 'react';
import Alert from'./components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App(){
   const [mode,setMode]=useState('light');
   const [alert,setAlert] = useState(null);

   const showAlert=  (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
   }

   const toggleMode=()=>{
      if(mode ==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#1c293e';
        showAlert("Dark mode has been enabled","sucess");
        document.title='TextUtils-Dark Mode';
       
      }else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert(" Light mode has been enabled","sucess");
        document.title='TextUtils-light Mode';
      }
   }
    return(
      <>
      <Router>
      <Navbar  title="TextUtils" mode= {mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
          <Route path="/about" Component={About}>
            {/* <About /> */}
          </Route>
          <Route path="/" Component={TextForm}>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze "mode= {mode} />  */}
          </Route>

      </Routes>
         </div>  
      </Router>
   
      </>
    );
  }
export default App;
