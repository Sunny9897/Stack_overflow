
import './App.css'

import { useDispatch } from 'react-redux'

import Navbar from './component/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Allroutes from './Allroutes';
import { fetchAllQuestions } from './actions/question';
import { useEffect } from 'react';
import { fetchAllUsers } from './actions/users'
//import { chatBot } from './component/ChatBot/chatBot';

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])
  return (
    <div className="App">
      
       
      <Router>
       <Navbar/>
       <Allroutes/>
      </Router>
   
    </div>
  );
}

export default App;
