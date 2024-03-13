import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import linkedin from '../../assets/linkedin_logo.jpeg';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; // Removed signInWithEmailAndPassword since this is SignUp
import { auth } from '../Feed/firebase';
import store from '../../redux/store';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const register = async (e) => {
    e.preventDefault();
    if (!name) {
      return alert('Please enter a full name');
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const { uid } = user;
  
      await updateProfile(user, {
        displayName: name,
        photoURL: profilePic,
      });
  
      store.dispatch({
        type: 'logIn',
        payload: {
          email: user.email,
          displayName: name,
          photoUrl: profilePic,
          uid: uid
        }
      });
      console.log(user.displayName)
      console.log(store.getState())
      navigate('/'); // Navigate to the '/' route upon successful registration
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('The email address is already in use. Please sign in instead.');
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className='login'>
      <img src={linkedin} alt='no source' />
      <form>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name(required if registering)' />
        <input type='text' value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile pic URL(optional)' />
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button type='submit' onClick={register}>Register Now</button>
      </form>
      <p>Already a member?<Link to='/login' className='login_register'>SignIn</Link></p>
    </div>
  );
}

export default SignUp;
