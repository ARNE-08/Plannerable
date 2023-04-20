import React from 'react'
import { Box, Button } from '@mui/material'
import '../styles/Splash.css'

function SplashScreen() {
  return (
    <Box class="Splash">
      <Box
        component='img'
        sx={{
          width: 500
        }}
        alt="Logo"
        src="/src/assets/LOGO-plannerableFont.png"
      />
      {/* <Button variant="contained">Login</Button> */}
      <br /><button class="login">Login</button><br />
      <button class="regis">Register</button>
    </Box>
  )
}

export default SplashScreen