import React from 'react'
// import { Box } from '@mui/material'
import { Box, Typography, Grid, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import '../styles/Register.css'

function Register() {
  return (
    <Box class="RegisPage">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      // class="Form"
      >
        <Grid item xs={12}>
          <Box
            component="img"
            sx={{
              width: 525,
            }}
            alt="Logo"
            src="/src/assets/LOGO-plannerableStraight.png"
          />
        </Grid>
        <Grid item xs={12} justifyContent="center"
          alignItems="center">
          <Box class="RegisBox">
            <Box class="closeregis">
              <nav>
                <NavLink replace to="/" className="inactive-link">
                  {({ isActive }) =>
                    isActive ? (
                      <p className="active-link">Home</p>
                    ) : (
                      <button class="closeButton">
                        <Box class="closeIcon">
                          <ArrowBackRoundedIcon />
                        </Box>
                      </button>
                    )
                  }
                </NavLink>
              </nav>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Person2OutlinedIcon sx={{ position: 'relative', bottom: '100px', color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                // class="InputForm pass"
                id="input-with-sx"
                label="Username"
                type={"text"}
                // value={email}
                sx={{ width: '250px', position: 'relative', bottom: '105px' }}
                variant="standard"
                required
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <MailOutlineRoundedIcon sx={{ position: 'relative', bottom: '70px', color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                // class="InputForm mail"
                id="input-with-sx"
                label="Email"
                type={"email"}
                // value={email}
                sx={{ width: '250px', position: 'relative', bottom: '75px' }}
                variant="standard"
                required />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <LockOutlinedIcon sx={{ position: 'relative', bottom: '40px', color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                // class="InputForm pass"
                id="input-with-sx"
                label="Password"
                type={"password"}
                // value={email}
                sx={{ width: '250px', position: 'relative', bottom: '45px' }}
                variant="standard"
                required
              />
            </Box>

            <FormGroup sx={{position: 'relative', bottom: '15px', right: '15px'}}>
              <FormControlLabel required control={<Checkbox
                sx={{
                  color: 'action.active',
                  '&.Mui-checked': {
                    color: '#7560A2',
                  },
                }} />} label="Agree to term and policies" />
            </FormGroup>
            {/* <Box class='InputForm mail'>
            <label>
              Email
              {/* <Box class='icon'><MailOutlineRoundedIcon /></Box>
            </label>
            <input type="email" placeholder=" " required />
            <MailOutlineRoundedIcon />
          </Box>
          <Box class="Border"></Box>

          <Box class='InputForm pass'>
            <label>
              Password
              <input type="password" placeholder=" " required />
              <LockOutlinedIcon />
              {/* <Box class='icon'><LockOutlinedIcon /></Box>
            </label>
          </Box>
          <Box class="Border1"></Box> */}

            <Box class="Regisnav">
              <nav>
                <NavLink replace to="/login" className="inactive-link">
                  {({ isActive }) =>
                    isActive ? (
                      <p className="active-link">Home</p>
                    ) : (
                      <button class="loginBut">Register</button>
                    )
                  }
                </NavLink>
              </nav>
            </Box>

            <Box class='noacc'>
              <nav>
                <NavLink replace to="/login" className="inactive-link">
                  {({ isActive }) =>
                    isActive ? (
                      <p className="active-link">Home</p>
                    ) : (
                      <Typography variant="p" class="RegisText">
                        Already have an account?
                      </Typography>
                    )
                  }
                </NavLink>
              </nav>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box >
  )
}

export default Register