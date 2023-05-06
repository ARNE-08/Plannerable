import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Grid } from '@mui/material'
import '../styles/AddTodo.css'

function AddTodo() {
  return (
    <>
      <Navbar />
      <Box class="AddTodoBox">
        <Box class="AddBox"></Box>
        <Box sx={{zIndex:"99"}}>
          <Button class="addbut can">cancel</Button>
          <Button class="addbut add">add</Button>
        </Box>
        {/* <Grid container sx={{zIndex:"99"}} direction="row">
          <Grid item>
            <Button class="addbut can">cancel</Button>
          </Grid>
          <Grid item>
            <Button class="addbut add">add</Button>
          </Grid>
        </Grid> */}
        {/* <Button class="addbut can">cancel</Button>
        <Button class="addbut add">add</Button> */}
      </Box>
    </>
  )
}

export default AddTodo