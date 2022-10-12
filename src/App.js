
import './App.css';
import Homepage from './Components/Pages/Homepage';
import Feed from './Components/Pages/Feed';
import Background from './Components/Background';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Components/Pages/Profile';

function App() {
  return (
    
    <Router>
      <div className='App'>
        <Background />
      <Routes>
           <Route path='/' exact element={ <Homepage />} /> 
           <Route path='/feed' exact element={ <Feed />} /> 
           <Route path='/:id' exact element={ <Profile />} /> 

           </Routes>
      </div>
      </Router>
  );
}

export default App;
