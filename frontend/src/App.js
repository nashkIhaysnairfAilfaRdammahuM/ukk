import { useEffect, useState } from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
  addComplaint,
  fetchComplaints
} from './reducers/complaintsReducer'
import {
  addResponse,
  fetchResponses
} from './reducers/responsesReducer'
import {
  addUser,
  editUser,
  fetchUsers
} from './reducers/usersReducer'
import {
  Routes, Route, useMatch, useNavigate, Form
} from 'react-router-dom'
import Home from './components/Home'
import Complaint from './components/Complaint'
import Users from './components/Users'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import axios from 'axios'

const App = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [newComplaint, setNewComplaint] = useState('')
  const [complaintImage, setComplaintImage] = useState('') 
  const [newResponse, setNewResponse] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [newNik, setNewNik] = useState('')
  const [newName, setNewName] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [newLevel, setNewLevel] = useState('')

  useEffect(() => {
    dispatch(fetchComplaints())
    dispatch(fetchResponses())
    dispatch(fetchUsers())
  }, [dispatch])
  
  const complaints = useSelector(state => state.complaints)
  const responses = useSelector(state => state.responses)
  const users = useSelector(state => state.users)

  const handleComplaintSubmit = async (event) => {
    event.preventDefault()

    const complaintObject = {
      content: newComplaint,
      user: '63fe034f6b608580bc493dd6'
    }

    const formData = new FormData()
    formData.append('description', JSON.stringify(complaintObject))
    formData.append('complaintImage', complaintImage)

    dispatch(addComplaint(formData, { headers: {'Content-Type': 'multipart/form-data'}}))
    setNewComplaint('')
    document.getElementById('complaintImage').value = null
  }

  const handleResponseSubmit = (event) => {
    event.preventDefault()
    
    const responseObject = {
      complaint: complaint.id,
      date: new Date().toISOString(),
      content: newResponse,
      user: Math.ceil(Math.random() * 2)
    }

    dispatch(addResponse(responseObject))
    setNewResponse('')
  }

  const handleLogin = (event) => {
    event.preventDefault()

    setUsername('')
    setPassword('')
  }

  const handleRegister = (event) => {
    event.preventDefault()

    const userObject = {
      nik: newNik,
      name: newName,
      username: newUsername,
      password: newPassword,
      phoneNumber: newPhoneNumber,
      level: newLevel
    }
    
    dispatch(addUser(userObject))
    setNewNik('')
    setNewName('')
    setNewUsername('')
    setNewPassword('')
    setNewPhoneNumber('')
  }

  const handleUserEdit = (id, data, config) => {
    dispatch(editUser(id, data, config))
  }

  const complaintsMatch = useMatch('/complaints/:id')
  const complaint = complaintsMatch
    ? complaints.find((complaint) => complaint.id === complaintsMatch.params.id)
    : null

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <Home
            complaints={complaints}
            handleComplaintSubmit={handleComplaintSubmit}
            newComplaint={newComplaint}
            setNewComplaint={setNewComplaint}
            setComplaintImage={setComplaintImage}
          />
        } />
        <Route path='/complaints/:id' element={
          <Complaint
            complaint={complaint}
            handleResponseSubmit={handleResponseSubmit}
            newResponse={newResponse}
            setNewResponse={setNewResponse}
          />
        } />
        <Route path='/users' element={
          <Users
            users={users}
            handleRegister={handleRegister}
            newNik={newNik}
            setNewNik={setNewNik}
            newName={newName}
            setNewName={setNewName}
            newUsername={newUsername}
            setNewUsername={setNewUsername}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            newPhoneNumber={newPhoneNumber}
            setNewPhoneNumber={setNewPhoneNumber}
            newLevel={newLevel}
            setNewLevel={setNewLevel}
            handleUserEdit={handleUserEdit}
          />
        } />
        <Route path='/login' element={
          <Login
            handleLogin={handleLogin}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        } />
        <Route path='/register' element={
          <Register
            handleRegister={handleRegister}
            newNik={newNik}
            setNewNik={setNewNik}
            newName={newName}
            setNewName={setNewName}
            newUsername={newUsername}
            setNewUsername={setNewUsername}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            newPhoneNumber={newPhoneNumber}
            setNewPhoneNumber={setNewPhoneNumber}
          />
        } />
      </Routes>
    </div>
  )
}

export default App