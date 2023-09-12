import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); // dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#031a3b';
    showAlert("Dark mode has been enabled", "success");
    document.title='Parul Rana - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title='Parul Rana - Light Mode';
      }
  }
  return (
    <>
    <Router>
  <Navbar title="ParulRana" About="About Me" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Routes>
           <Route exact path="/About" element={<About/>}>
          </Route>    
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text here" mode={mode}/>}>
          </Route>
          
  </Routes>
  </div>
  </Router> 
  </>
 );
}
export default App;
