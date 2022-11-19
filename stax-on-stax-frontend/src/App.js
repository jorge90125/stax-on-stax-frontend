import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import SignIn from './components/SignIn'

let baseURL = 'http://localhost:8000'

const App = () => {

  const login = async (e) => {
    console.log(e.target.email.value)
    e.preventDefault()
    const loginForm = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    try {
      const res = await fetch(`${baseURL}/users/login`, {
        method: 'POST',
        body: JSON.stringify(loginForm),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      if (res.status === 200) {
        console.log(res.status)
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn login={login}/>}/>
      </Routes>
    </div>
  );
}

export default App;
