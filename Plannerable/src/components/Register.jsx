import React from 'react'
// import { Box } from '@mui/material'
import { Box, Typography, Grid, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState, useContext } from 'react';
import { AxiosError } from 'axios';
import Axios from '../axios/AxiosInstance'
import GlobalContext from '../context/GlobalContext';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import '../styles/Register.css'

function Register({ setIsLogin }) {
  const { user, setStatus } = useContext(GlobalContext);

  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleSubmit = async () => {
    // TODO: Implement login
    // 1. validate form
    if (!validateForm()) return;
    // 4. if fail, show error message alert, and reset password fields
    try {
      // 2. send request to server
      const response = await Axios.post('http://localhost:8000/regis', {
        username,
        email,
        password
      });
      // 3. if successful, change modal to login mode
      if (response.data.success) {
        setIsLogin(true);
        setStatus({
          msg: response.data.msg,
          severity: 'success'
        });
      }
    } catch (e) {
      // 4. if fail, show error message alert, and reset password fields
      setPassword('');
      // check if e are AxiosError
      if (e instanceof AxiosError)
        if (e.response)
          // check if e.response exist
          // console.log(e.response.data.error)
          return setStatus({
            msg: e.response.data.error,
            severity: 'error',
          });
      // if e is not AxiosError or response doesn't exist, return error message
      return setStatus({
        msg: e.message,
        severity: 'error',
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    //check user
    if (!username) {
      setUsernameError('Username is required');
      isValid = false;
    }
    //check email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }
    // Check privacy policy checkbox
    const privacyPolicyChecked = document.querySelector('#privacyPolicyCheckbox').checked;
    if (!privacyPolicyChecked) {
      setStatus({
        msg: 'Please agree to the privacy policy',
        severity: 'error',
      });
      isValid = false;
    }
    return isValid;
  }

  const handleClick = () => {
    setIsLogin(true)
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    // class="Form"
    >
      <Grid item xs={12} display={{ xs: "none", sm: "block" }}>
        <Box
          component="img"
          sx={{
            width: '525px',
          }}
          alt="Logo"
          src="/src/assets/LOGO-plannerableStraight.png"
        />
      </Grid>
      <Grid item xs={12} display={{ xs: "block", sm: "none" }}>
        <Box
          component="img"
          sx={{
            width: '80%',
          }}
          alt="Logo"
          src="/src/assets/LOGO-plannerableStraight.png"
        />
      </Grid>

      <Grid item xs={12} justifyContent="center"
        alignItems="center" display={{ xs: "none", sm: "block" }}>
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
            <Person2OutlinedIcon sx={{ position: 'relative', bottom: '70px', color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              // class="InputForm pass"
              id="input-with-sx"
              label="Username"
              type={"text"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={usernameError !== ''}
              helperText={usernameError}

              sx={{ width: '250px', position: 'relative', bottom: '75px' }}
              variant="standard"
              required
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <MailOutlineRoundedIcon sx={{ position: 'relative', bottom: '40px', color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              // class="InputForm mail"
              id="input-with-sx"
              label="Email"
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError !== ''}
              helperText={emailError}

              sx={{ width: '250px', position: 'relative', bottom: '45px' }}
              variant="standard"
              required />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockOutlinedIcon sx={{ position: 'relative', bottom: '10px', color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              // class="InputForm pass"
              id="input-with-sx"
              label="Password"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError !== ''}
              helperText={passwordError}

              sx={{ width: '250px', position: 'relative', bottom: '15px' }}
              variant="standard"
              required
            />
          </Box>

          <FormGroup sx={{ position: 'relative', bottom: '-20px', right: '20px' }}>
            <FormControlLabel required control={<Checkbox
              id="privacyPolicyCheckbox"
              sx={{
                color: 'action.active',
                '&.Mui-checked': {
                  color: '#7560A2',
                },
              }} />} label="Agree to privacy policies" />
          </FormGroup>

          <Box class="Regisnav">
            <button class="loginBut" onClick={handleSubmit}>Signup</button>
          </Box>

          <Box class='noacc directtologin' onClick={handleClick}>
            <Typography variant="p" class="RegisText">
              Already have an account?
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} justifyContent="center"
        alignItems="center" display={{ xs: "block", sm: "none" }}>
        <Box class="RegisBox1">
          <Box class="closeregis1">
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
            <Person2OutlinedIcon sx={{ position: 'relative', bottom: '70px', color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              // class="InputForm pass"
              id="input-with-sx"
              label="Username"
              type={"text"}
              // value={email}
              sx={{ width: '200px', position: 'relative', bottom: '75px' }}
              variant="standard"
              required
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <MailOutlineRoundedIcon sx={{ position: 'relative', bottom: '40px', color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              // class="InputForm mail"
              id="input-with-sx"
              label="Email"
              type={"email"}
              // value={email}
              sx={{ width: '200px', position: 'relative', bottom: '45px' }}
              variant="standard"
              required />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LockOutlinedIcon sx={{ position: 'relative', bottom: '10px', color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              // class="InputForm pass"
              id="input-with-sx"
              label="Password"
              type={"password"}
              // value={email}
              sx={{ width: '200px', position: 'relative', bottom: '15px' }}
              variant="standard"
              required
            />
          </Box>

          <FormGroup sx={{ position: 'relative', bottom: '-20px' }}>
            <FormControlLabel required control={<Checkbox
              id="privacyPolicyCheckbox"
              sx={{
                color: 'action.active',
                '&.Mui-checked': {
                  color: '#7560A2',
                },
              }} />} label="Agree to term and policies" />
          </FormGroup>

          <Box class="Regisnav">
            <button class="loginBut" onClick={handleSubmit}>Signup</button>
          </Box>

          <Box class='noacc directtologin' onClick={handleClick}>
            <Typography variant="p" class="RegisText">
              Already have an account?
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Register