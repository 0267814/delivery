import React from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import General from './components/General';
import Assesment from './components/Assesment';
import Advice from './components/Advice';
import Community from './components/Community';
import Map from './components/Map';
import {Routes, Route, Navigate} from 'react-router-dom';
import AppFooter from './components/Footer';
import Chatbot from './components/Chatbot';
import Post from './components/Post';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Assesment2 from './components/Assesment2';
import Community2 from './components/Community2';
import Password from './components/Password';

function App() {

  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/general' element={<General/>}/>
        <Route path='/assesment' element={<Assesment/>}/>
        <Route path='/assesment2' element={<Assesment2/>}/>
        <Route path='/advice' element={<Advice/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/community2' element={<Community2/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/changePassword' element={<Password/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      <AppFooter/>
    </div>
  );
}

export default App;