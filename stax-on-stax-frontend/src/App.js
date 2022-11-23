import './App.css';
import React, {useState, useEffect} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Nav from './components/Nav'
import SignIn from './components/SignIn'
import RecordContainer from './components/RecordContainer'
import NewForm from './components/NewForm'
import EditForm from './components/EditForm'
import Register from './components/Register'
import ShowRecord from './components/ShowRecord'
import AllUsers from './components/AllUsers'
import OtherUserRecords from './components/OtherUserRecords'

let baseURL = 'http://localhost:8000'

const App = () => {
  const [records, getRecords] = useState([])
  const [singleRecord, getSingleRecord] = useState([])
  const [allUsers, getAllUsers] = useState([])
  const [otherUserRecords, getOtherUserRecords] = useState([])

  const navigate = useNavigate()

  const showRecord = async (id) => {
    console.log(id)
    try {
      fetch(`${baseURL}/records/${id}`, {
        method: 'GET',
        credentials: 'include'
      })
      .then(res => {
        return res.json()
      }).then(data => {
        console.log(data.data)
        getSingleRecord(data.data)
      }).then(
        navigate('showrecord')
      )
    }
    catch (err) {
      console.log(err)
    }
  }

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

  const handleGetUsers = () => {
    fetch(`${baseURL}/users/`, {
      credentials: 'include'
    }).then(res => {
      return res.json()
    }).then(data => {
      getAllUsers(data.data)
    })
  }

  const handleGetUserRecords = async (user) => {
    fetch(`${baseURL}/users/${user}/records`, {
      credentials: 'include'
    }).then(res => {
      return res.json()
    }).then(data => {
      console.log(data.data)
      getOtherUserRecords(data.data)
    }).then(() => {
      navigate('otherusercollection')
    })
  }

  const login = async (e) => {
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

  const logout = async () => {
    try {
      fetch(`${baseURL}/users/logout`, {
        method: 'GET',
        credentials: 'include'
      }).then(() => {
        navigate('/')
        getRecords([])
      })
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

  const editRecord = async (recordInfo) => {
    console.log(recordInfo)
    const editForm = {
      name: recordInfo.name,
      artist: recordInfo.artist,
      artwork_url: recordInfo.artwork_url,
      release_year: recordInfo.release_year,
      pressing_year: recordInfo.pressing_year,
      genre: recordInfo.genre,
      record_label: recordInfo.record_label,
      catalog_num: recordInfo.catalog_num,
      country: recordInfo.country
    }
    try {
      await fetch(`${baseURL}/records/${recordInfo.id}`, {
        method: 'PUT',
        body: JSON.stringify(editForm),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      }).then(() => {
        handleGetRecords()
        showRecord(recordInfo.id)
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  const deleteRecord = async (id) => {
    try {
      fetch(`${baseURL}/records/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      }).then(() => {
        navigate('records')
        handleGetRecords()
    })
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetRecords()
    handleGetUsers()
    console.log('Component did mount.')
  }, [])

  return (
    <div>
      <Nav logout={logout} />
      <Routes>
        <Route path='/' element={<SignIn login={login}/>}/>
        <Route path='/records' element={<RecordContainer records={records} showRecord={showRecord}/>}/>
        <Route path='/register' element={<Register register={register}/>}/>
        <Route path='/newform' element={<NewForm addRecord={addRecord}/>}/>
        <Route path='/showrecord' element={<ShowRecord record={singleRecord} navigate={navigate} deleteRecord={deleteRecord}/>}/>
        <Route path='/editform' element={<EditForm navigate={navigate} record={singleRecord} editRecord={editRecord} />}/>
        <Route path='/allusers' element={<AllUsers allUsers={allUsers} getOtherUserRecords={handleGetUserRecords} />}/>
        <Route path='/otherusercollection' element={<OtherUserRecords records={otherUserRecords} navigate={navigate} />}/>
      </Routes>
    </div>
  );
}

export default App;
