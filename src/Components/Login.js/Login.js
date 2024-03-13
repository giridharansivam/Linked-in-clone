import React, { useState } from 'react'
import './Login.css'
import {Link, Routes} from 'react-router-dom'
import linkedin from '../../assets/linkedin_logo.jpeg'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Feed/firebase';
import store from '../../redux/store'
import {useNavigate} from 'react-router-dom'
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate(); // Initialize useHistory hook
    const loginApp = async(e) =>{
            e.preventDefault();
            const userCredential = await signInWithEmailAndPassword(auth,email,password)
            const user = userCredential.user;
              const { uid } = user;
              console.log({
                email:user.email,
                  displayName:user.displayName,
                  photoUrl:user.photoURL,
                  uid : uid
              })
              store.dispatch({type:"logIn",
              payload:{
                  email:user.email,
                  displayName:user.displayName,
                  photoUrl:user.photoURL,
                  uid : uid
              }
            })
            navigate('/'); // Assuming '/logIn' is the path to Widgets component


    }
      
   
    
  
    return (
    <div className='login'>
        <img src={linkedin} alt='no source'/>
        <form>
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email'/>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password'/>
        <button type='submit' onClick={loginApp}>Register Now</button>
        </form>
        <p>Not a member?<Link to="/signUp" className='login_register' >SignUp</Link>
        </p>

    
    </div>
  )
}

export default Login
