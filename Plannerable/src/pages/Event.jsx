import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Event.css'
import { Box, Typography, Button } from '@mui/material'

function Event() {
  return (
    <Box>
      <Navbar />
      <Typography variant='h4' class="TodoText">Upcoming Event</Typography>
      <Button class="deleteBut">delete all</Button>
      <Box class="weeklyBox">
        <Typography variant='h5' class="reminderTitle">
          Weekly reminder
        </Typography>
      </Box>
    </Box>
  )
}

export default Event