import React from 'react';
import axios from "axios";
import './App.css';
import Homepage from './Components/Pages/Homepage';
import Feed from './Components/Pages/Feed';
import Background from './Components/Background';
import CreatePost from './Components/CreatePost';
import MyPost from './Components/Pages/MyPost';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <div className='App'>
        <Background />
      <Routes>
           <Route path='/' exact element={ <Homepage />} /> 
           <Route path='/CreatePost' exact element ={<CreatePost/>}/>
           <Route path='/feed' exact element={ <Feed />} /> 
           <Route path='/mypost' exact element={ <MyPost />} /> 
           </Routes>
      </div>
      </Router>
  );
}

export default App;
