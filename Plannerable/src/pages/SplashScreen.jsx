import React from 'react'
import { Box, Button, Grid } from '@mui/material'
import { Route, Routes, NavLink, useParams } from 'react-router-dom'
import '../styles/Splash.css'

function SplashScreen() {
  return (
    <Box class="Splash">
      <Grid display={{ xs: "none", sm: "block" }}>
        <Box
          class="logoimg"
          component='img'
          alt="Logo"
          src="/src/assets/LOGO-plannerableFont.png"
        />
      </Grid>
      <Grid display={{ xs: "block", sm: "none" }}>
        <Box
          class="logoimg1"
          component='img'
          alt="Logo"
          src="/src/assets/LOGO-plannerableFont.png"
        />
      </Grid>
      {/* <Button variant="contained">Login</Button> */}
      <Grid container spacing={2} direction='column' display={{ xs: "none", sm: "block" }}>
        <Grid item>
          <nav>
            <NavLink replace to="/login" className="inactive-link">
              {({ isActive }) =>
                isActive ? (
                  <p className="active-link">Home</p>
                ) : (
                  <button class="login">Login</button>
                )
              }
            </NavLink>
          </nav>
        </Grid>

        <Grid item>
          <nav>
            <NavLink replace to="/regis" className="inactive-link">
              {({ isActive }) =>
                isActive ? (
                  <p className="active-link">Home</p>
                ) : (
                  <button class="regis">Register</button>
                )
              }
            </NavLink>
          </nav>
        </Grid>
      </Grid>

      <Grid container spacing={2} direction='column' display={{ xs: "block", sm: "none" }}>
        <Grid item>
          <nav>
            <NavLink replace to="/login" className="inactive-link">
              {({ isActive }) =>
                isActive ? (
                  <p className="active-link">Home</p>
                ) : (
                  <button class="login1">Login</button>
                )
              }
            </NavLink>
          </nav>
        </Grid>

        <Grid item>
          <nav>
            <NavLink replace to="/regis" className="inactive-link">
              {({ isActive }) =>
                isActive ? (
                  <p className="active-link">Home</p>
                ) : (
                  <button class="regis1">Register</button>
                )
              }
            </NavLink>
          </nav>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SplashScreen