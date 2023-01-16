import React from 'react';
import { Login } from './Pages/Login';
import { MainPage } from './Pages/Main/MainPage';
import { Navbar } from './Components/Navbar';
import { AddPost } from './Pages/AddPost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

// https://react-icons.github.io/react-icons/icons?name=vsc
// to do - add delete post function

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar/>
        <Routes> 
          <Route path='' element={<MainPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/addpost' element={<AddPost/>}/>
          <Route path="*" element={"404: PAGE NOT FOUND"}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
