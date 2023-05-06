import React from 'react'
import { AppBar, Toolbar, Typography, Stack, IconButton, Box, Button, Grid, MenuItem, Menu } from '@mui/material'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Nav.css';
// import { display, fontSize } from '@mui/system';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';


function Navbar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleChange = (event) => {
    //     setAuth(event.target.checked);
    // };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box class="Header">
            <Box class="LogoBox">
                <img src="/src/assets/LOGO-plannerableStraight.png" alt="Logo" class="logonav" />
                {/* <Box
                    class="logonav"
                    component='img'
                    alt="Logo"
                    src="/src/assets/LOGO-plannerableStraight.png"
                /> */}
            </Box>

            {/* <Grid item> */}
            <Grid container direction="row" spacing={3} justifyContent="center" alignItems="center" sx={{ position: "relative", left: "300px" }}>
                <Grid item display={{ xs: "none", md: "block" }}>
                    <nav>
                        <NavLink replace to="/home" className="inactive-link">
                            {({ isActive }) =>
                                isActive ? (
                                    <Typography className="active-link text">Home</Typography>
                                ) : (
                                    <Typography className="text">Home</Typography>
                                )
                            }
                        </NavLink>
                    </nav>
                </Grid>
                <Grid item display={{ xs: "none", md: "block" }}>
                    <nav>
                        <NavLink replace to="/todo" className="inactive-link">
                            {({ isActive }) =>
                                isActive ? (
                                    <Typography variant='h5' className="active-link text">To-do list</Typography>
                                ) : (
                                    <Typography variant='h5' className="text">To-do list</Typography>
                                )
                            }
                        </NavLink>
                    </nav>
                </Grid>
                <Grid item display={{ xs: "none", md: "block" }}>
                    <nav>
                        <NavLink replace to="/event" className="inactive-link">
                            {({ isActive }) =>
                                isActive ? (
                                    <Typography variant='h5' className="active-link text">Events</Typography>
                                ) : (
                                    <Typography variant='h5' className="text">Events</Typography>
                                )
                            }
                        </NavLink>
                    </nav>
                </Grid>
                <Grid item>
                    <Button class="Addbut" onClick={handleMenu}
                    >Add</Button>

                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        // sx={{position:"absolute"}}
                    >
                        <MenuItem onClick={handleClose} component={Link} to="/todoadd">Add To-do</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/eventadd">Add Event</MenuItem>
                    </Menu>
                </Grid>
                <Grid item>
                    <nav>
                        <NavLink replace to="/Profile" className="inactive-link">
                            {({ isActive }) =>
                                isActive ? (
                                    <img src="/src/assets/TempProfile.jpg" alt="" className="active-link ProfilePic" />
                                ) : (
                                    <img src="/src/assets/TempProfile.jpg" alt="" className="ProfilePic" />
                                )
                            }
                        </NavLink>
                    </nav>
                </Grid>
            </Grid>
            <IconButton color='#7560A2' sx={{ display: { xs: "block", md: "none" } }}>
                <MenuIcon></MenuIcon>
            </IconButton>
        </Box>
    )
}

export default Navbar