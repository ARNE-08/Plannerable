import { useState, useMemo } from 'react'
import './App.css'
import { Route, Routes, NavLink, useParams } from 'react-router-dom'
import SplashScreen from './pages/SplashScreen'
import Error from './pages/Error'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Profile from './pages/Profile'
import AddTodo from './pages/AddTodo'
import Auth from './pages/Auth'
import SnackBarMessage from './components/SnackBarMessage'
import { Box } from '@mui/material'
import GlobalContext from '/src/context/GlobalContext'


function App() {
  const [status, setStatus] = useState('');
  const [user, setUser] = useState(false);

  const [appear, setAppear] = useState(false);

  const globalContextValue = useMemo(() => {
    return {
      user,
      status,
      setUser,
      setStatus,
    };
  }, [user]);

  const generatekey = () => {
    return Math.random();
  };

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <Routes>
        <Route exect path="/" element={<SplashScreen />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todoadd" element={<AddTodo />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {appear ? (
        <div>
          <Auth />
          <Home />
          <Todo />
          <Profile />
          <AddTodo />
        </div>
      ) : null}
      {status ? (
        <SnackBarMessage key={generatekey()} open={status.open} severity={status.severity} message={status.msg} />
      ) : null}
    </GlobalContext.Provider>
  )
}

export default App
