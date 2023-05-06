import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import '../styles/Home.css'

function Home() {
    return (
        <Box class="Homepage">
            <Navbar />
            {/* <Box> */}
            {/* <Typography variant = 'h5' class = "reminderTitle">
                    Today's reminder
                </Typography> */}
            <Box class="reminderBox">
                <Typography variant='h5' class="reminderTitle">
                    Today's reminder
                </Typography>
            </Box>

            {/* <Box class="NotePos">
                <Note />
            </Box> */}

            {/* </Box> */}
            {/* <Box
                class="Note"
                component='img'
                alt="Note"
                src="/src/assets/Note.png"
            /> */}

            <Box class="NoteBox">
                <Box class="EditNav">
                    <nav>
                        <NavLink replace to="/noteedit" className="inactive-link">
                            {({ isActive }) =>
                                isActive ? (
                                    <p className="active-link">Home</p>
                                ) : (
                                    <button class="EditBut">
                                        <Box class="EditIcon">
                                            <EditNoteRoundedIcon />
                                        </Box>
                                    </button>
                                )
                            }
                        </NavLink>
                    </nav>
                </Box>

                <Typography variant='h5' class="NoteTitle">Note :</Typography>
            </Box>

            <Box
                class="RabbitFoot"
                component='img'
                alt="Note"
                src="/src/assets/Foot.png"
            />
        </Box>
    )
}

export default Home