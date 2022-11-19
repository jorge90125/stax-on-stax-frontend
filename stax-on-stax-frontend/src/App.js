import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import SignIn from './components/SignIn'
import RecordContainer from './components/RecordContainer'

let baseURL = 'http://localhost:8000'

const App = () => {
  const [records, getRecords] = useState([])

  const navigate = useNavigate()

  const handleGetRecords = () => {
    fetch(`${baseURL}/records/`, {
      credentials: 'include'
    })
    .then(res => {
      return res.json()
    }).then(data => {
      console.log(data.data)
      getRecords(data.data)
    })
  }

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
        handleGetRecords()
        navigate('records')
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetRecords()
    console.log('Component did mount.')
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn login={login}/>}/>
        <Route path='/records' element={<RecordContainer records={records}/>}/>
      </Routes>
    </div>
  );
}

export default App;
