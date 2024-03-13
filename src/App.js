import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/header';
import SideBar from './Components/SideBar/SideBar';
import Feed from './Components/Feed/Feed';

import Login from './Components/SignUp/SignUp';
import store from './redux/store';
import { useSelector } from 'react-redux';
import { selectedUser } from './redux/reducer';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import {Route, Routes, useNavigate } from 'react-router-dom';
import LoginApp from './Components/Login.js/Login';
import Widgets from './Components/Widgets/Widgets';
function App() {

  const user = useSelector(selectedUser) 
  const navigate = useNavigate()
  const auth = getAuth()
  useEffect(()=>{
    onAuthStateChanged(auth,userAuth=>{
      if(userAuth)
      {
        store.dispatch({type:"logIn",
        payload:{
            email:userAuth.email,
            displayName:userAuth.name,
            photoUrl:userAuth.photoUrl,
            uid : userAuth.uid
        }
      })
      }
      else{
        store.dispatch({type:"logOut"})
        navigate('/')
      }
    })
  },[auth])
  return (
    <div className="App">
      {/* Header */}
      <Header />
      
      
       <Routes>
        {/* Route for Widgets component */}
        <Route path='/signUp' element={<Login/>} />
        <Route path='/logIn' element={<LoginApp/>} />
        <Route path="/" element={!user.uid
         ?(
        <Login />
      ):(
      <div className='app_body'>
      <SideBar />
      <Feed name="Giridharan" />
      <Widgets/>
      </div> 
      )} />
      </Routes>
    </div>
  );
}

export default App;
