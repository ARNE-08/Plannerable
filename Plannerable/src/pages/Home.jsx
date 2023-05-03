import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Typography } from '@mui/material'
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
            {/* </Box> */}
            <Box
                class="Note"
                component='img'
                alt="Note"
                src="/src/assets/Note.png"
            />
        </Box>
    )
}

export default Home