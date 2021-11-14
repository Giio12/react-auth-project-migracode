import React, {useState} from 'react';
import './App.css';
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from "./components/Home"
import Signup from "./components/SignUp"

const App =()=> {
  const [token, setToken] = useState();
  if(!token){
    return <Login setToken = {setToken}/>
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <Router>
        <Routes>
          <Route path = "/home">
            <Home/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
