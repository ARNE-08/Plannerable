import React from 'react'
import { AppBar, Toolbar, Typography, Stack, IconButton, Box, Button, Grid, MenuItem, Menu } from '@mui/material'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Nav.css';

import { AxiosError } from 'axios';
import Axios from '../axios/AxiosInstance'
import { useState, useEffect } from 'react';

function Navbar() {
    const [profile, setProfile] = useState();

    useEffect(() => {
        const fetchProfilePic = async () => {
            try {
                const response = await Axios.get('/getProfilePic');
                const responseData = response.data;
                if (responseData.success) {
                    setProfile(responseData.data);
                    console.log(responseData.data.profile_picture);
                } else {
                    // Handle unsuccessful response
                }
            } catch (error) {
                // Handle the error
                console.error(error);
            }
        };

        // Fetch profile picture initially
        fetchProfilePic();

        // Poll for profile picture updates every 5 seconds
        const intervalId = setInterval(fetchProfilePic, 5000);

        return () => {
            // Cleanup the interval on component unmount
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Box class="Header">
            <Box class="LogoBox">
                <img src="/src/assets/LOGO-plannerableStraight.png" alt="Logo" class="logonav" />
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
                                        >Add</Button>
                                    </Box>) : (
                                    <Box class="Addbut">
                                        <Button class="AddButton" component={Link} to="/todoadd"
                                        >Add</Button>
                                    </Box>)
                            }
                        </NavLink>
                    </nav>
                </Grid>
                <Grid item>
                    <nav>
                        <NavLink replace to="/Profile" className="inactive-link">
                            {({ isActive }) =>
                                isActive ? (
                                    <img src={profile?.profile_picture} alt="" className="active-link ProfilePic" />
                                ) : (
                                    <img src={profile?.profile_picture} alt="" className="ProfilePic" />
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