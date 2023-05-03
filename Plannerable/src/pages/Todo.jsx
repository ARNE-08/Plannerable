import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Todo.css'
import { Box, Typography } from '@mui/material'

function Todo() {
  return (
    <Box class="TodoPage">
      <Navbar />
      <Box
        class="TodoRabbit"
        component='img'
        alt="Don't forget to do your work"
        src="/src/assets/Todo_rab.png"
      />
      <Typography variant='h4' class="TodoText">Todo</Typography>
    </Box>
  )
}

export default Todo