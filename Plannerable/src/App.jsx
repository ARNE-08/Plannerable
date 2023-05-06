import { useState } from 'react'
import './App.css'
import { Route, Routes, NavLink, useParams } from 'react-router-dom'
import SplashScreen from './pages/SplashScreen'
import Login from './pages/Login'
import Error from './pages/Error'
import Register from './pages/Register'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Event from './pages/Event'
import Profile from './pages/Profile'
import EditNote from './pages/EditNote'
import AddTodo from './pages/AddTodo'
import AddEvent from './pages/AddEvent'
import { Box } from '@mui/material'

function App() {
  // const [count, setCount] = useState(0)
  const [userLogin, setuserLogin] = useState(false)

  return (
    <Box>
      <Routes>
        <Route exect path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regis" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/event" element={<Event />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/noteedit" element={<EditNote />} />
        <Route path="/todoadd" element={<AddTodo />} />
        <Route path="/eventadd" element={<AddEvent />} />
        {/* <Route exect path="/" element={<Home userLogin={userLogin} setuserLogin={setuserLogin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id" element={<Profile />} />
  <Route path="/admin" element={<Admin userLogin={userLogin} setuserLogin={setuserLogin} />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Box>
  )
}

export default App
