import React from 'react'
import Navbar from '../components/Navbar'
import { Box } from '@mui/material'
import '../styles/Profile.css'

function Profile() {
  return (
    <Box>
      <Navbar />
      <Box
        class="ProfileBG"
        component='img'
        alt="Background"
        src="/src/assets/ProfileFolder.png"
      />
    </Box>
  )
}

export default Profile