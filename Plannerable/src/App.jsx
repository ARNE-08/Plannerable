import { useState } from 'react'
import './App.css'
import { Route, Routes, NavLink, useParams } from 'react-router-dom'
import SplashScreen from './components/SplashScreen'
import { Box } from '@mui/material'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Box>
      <Routes>
        <Route exect path="/" element={<SplashScreen />} />
        {/* <Route exect path="/" element={<Home userLogin={userLogin} setuserLogin={setuserLogin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/admin" element={<Admin userLogin={userLogin} setuserLogin={setuserLogin} />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
    </Box>
  )
}

export default App
