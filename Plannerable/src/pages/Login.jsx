import React from "react";
import { Box, Typography, Grid, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../styles/Login.css";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {
  return (
    <Box class="loginPage">
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
          alignItems="center">
          <Box class="FormBox">
            <Box class="closenav">
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
              <MailOutlineRoundedIcon sx={{ position: 'relative', bottom: '85px', color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                // class="InputForm mail"
                id="input-with-sx"
                label="Email"
                type={"email"}
                // value={email}
                sx={{ width: '250px', position: 'relative', bottom: '90px' }}
                variant="standard"
                required />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <LockOutlinedIcon sx={{ position: 'relative', bottom: '50px', color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                // class="InputForm pass"
                id="input-with-sx"
                label="Password"
                type={"password"}
                // value={email}
                sx={{ width: '250px', position: 'relative', bottom: '60px' }}
                variant="standard"
                required
              />
            </Box>
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

            <Box class="Loginnav">
              <nav>
                <NavLink replace to="/home" className="inactive-link">
                  {({ isActive }) =>
                    isActive ? (
                      <p className="active-link">Home</p>
                    ) : (
                      <button class="loginBut">Login</button>
                    )
                  }
                </NavLink>
              </nav>
            </Box>

            <Box class='noacc'>
              <nav>
                <NavLink replace to="/regis" className="inactive-link">
                  {({ isActive }) =>
                    isActive ? (
                      <p className="active-link">Home</p>
                    ) : (
                      <Typography variant="p" class="RegisText">
                        Don't have an account?
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
  );
}

export default Login;
