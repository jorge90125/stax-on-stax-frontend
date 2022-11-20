import './App.css';
import React, {useState, useEffect} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Nav from './components/Nav'
import SignIn from './components/SignIn'
import RecordContainer from './components/RecordContainer'
import NewForm from './components/NewForm'
import Register from './components/Register'

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

  const register = async (e) => {
    e.preventDefault()
    const registerForm = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value
    }
    try {
      const res = await fetch(`${baseURL}/users/register`, {
        method: 'POST',
        body: JSON.stringify(registerForm),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      if (res.status === 201) {
        handleGetRecords()
        navigate('records')
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  const addRecord = async (e) => {
    e.preventDefault()
    const createForm = {
      name: e.target.name.value,
      artist: e.target.artist.value,
      artwork_url: e.target.artwork_url.value,
      release_year: e.target.release_year.value,
      pressing_year: e.target.pressing_year.value,
      genre: e.target.genre.value,
      record_label: e.target.record_label.value,
      catalog_num: e.target.catalog_num.value,
      country: e.target.country.value
    }
    console.log(createForm)
    try {
      const res = await fetch(`${baseURL}/records/`, {
        method: 'POST',
        body: JSON.stringify(createForm),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      handleGetRecords()
      navigate('records')
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
      <Nav />
      <Routes>
        <Route path='/' element={<SignIn login={login}/>}/>
        <Route path='/records' element={<RecordContainer records={records}/>}/>
        <Route path='/register' element={<Register register={register} />}/>
        <Route path='/newform' element={<NewForm addRecord={addRecord} />}/>
      </Routes>
    </div>
  );
}

export default App;
