import { useState, useMemo } from 'react'
import './App.css'
import { Route, Routes, NavLink, useParams } from 'react-router-dom'
import SplashScreen from './pages/SplashScreen'
import Error from './pages/Error'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Profile from './pages/Profile'
import EditNote from './pages/EditNote'
import AddTodo from './pages/AddTodo'
import Auth from './pages/Auth'
import { Box } from '@mui/material'
import GlobalContext from '/src/context/GlobalContext'


function App() {
  // const [count, setCount] = useState(0)
  const [status, setStatus] = useState('');
  const [user, setUser] = useState();

  const globalContextValue = useMemo(() => {
    return {
      user,
      setUser,
      setStatus,
    };
  }, [user]);

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <Routes>
        <Route exect path="/" element={<SplashScreen />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/noteedit" element={<EditNote />} />
        <Route path="/todoadd" element={<AddTodo />} />
        {/* <Route exect path="/" element={<Home userLogin={userLogin} setuserLogin={setuserLogin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id" element={<Profile />} />
  <Route path="/admin" element={<Admin userLogin={userLogin} setuserLogin={setuserLogin} />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </GlobalContext.Provider>
  )
}

export default App
