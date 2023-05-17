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

    // const handleMenu = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

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
            <Grid container direction="row" spacing={3} justifyContent="center" alignItems="center"
                sx={{ position: "relative", left: "325px" }}>
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
                <Grid item>
                    <nav>
                        <NavLink replace to="/todoadd" className="inactive-link">
                            {({ isActive }) =>
                                isActive ? (
                                    <Box class="active-link Addbut">
                                        <Button class="AddButton" component={Link} to="/todoadd"
                                        // sx={{backgroundColor:"#B2A4FF", width:"100px", height:"40px", color:"white", borderRadius:"50px",
                                        // cursor:"pointer"}}
                                        >Add</Button>
                                    </Box>) : (
                                    <Box class="Addbut">
                                        <Button class="AddButton" component={Link} to="/todoadd"
                                        // sx={{backgroundColor:"#B2A4FF", width:"100px", height:"40px", color:"white", borderRadius:"50px",
                                        // cursor:"pointer"}}
                                        >Add</Button>
                                    </Box>)
                            }
                        </NavLink>
                    </nav>
                    {/* <a href='/todoadd' class="Addbut">Add</a> */}
                    {/* <Box class="Addbut">
                        <Button class="AddButton" component={Link} to="/todoadd"
                        // sx={{backgroundColor:"#B2A4FF", width:"100px", height:"40px", color:"white", borderRadius:"50px",
                        // cursor:"pointer"}}
                        >Add</Button>
                    </Box> */}
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