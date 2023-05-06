import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Grid } from '@mui/material'

function AddEvent() {
  return (
    <>
      <Navbar />
      <Box class="AddTodoBox">
        <Box class="AddBox"></Box>
        <Box sx={{ zIndex: "99" }}>
          <Button class="addbut can">cancel</Button>
          <Button class="addbut add">add</Button>
        </Box>
      </Box>
    </>
  )
}

export default AddEvent