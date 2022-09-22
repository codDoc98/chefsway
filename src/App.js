
import './App.css';
import Homepage from './Components/Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <div className='App'>
      <Routes>
           <Route path='/' exact element={ <Homepage />} /> 
           </Routes>
      </div>
      </Router>
  );
}

export default App;
