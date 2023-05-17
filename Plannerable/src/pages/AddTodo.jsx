import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Grid, Typography, TextField } from '@mui/material'
import '../styles/AddTodo.css'
import MyDatePicker from '../components/BasicDatePicker'
import TimePickerComponent from '../components/BasicTimePicker'
import { useState } from 'react'

function AddTodo() {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')

  return (
    <>
      <Navbar />
      <Box class="AddTodoBox">
        <Box class="AddBox"></Box>
        <Box sx={{ zIndex: "99" }}>
          <Button class="addbut can">Cancel</Button>
          <Button class="addbut add">Add</Button>
        </Box>

        <Box class="TodoForm">
          <Typography class="Todolabel">Name : </Typography>
          <TextField
            id="standard-basic"
            label=""
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError !== ''}
            helperText={nameError}

            variant="standard"
            sx={{ position: "absolute", top: "170px", left: "290px", width: "1000px" }}
          // color='#D78B8B'
          />

          <Typography class="Todolabel">Deadline : </Typography>
          <Box class="DeadlineInput">
            <MyDatePicker />
          </Box>

          <Typography class="Todolabel">Time : </Typography>
          <Box class="TimeInput">
            <TimePickerComponent />
          </Box>

          <Typography class="Todolabel">Note (optional) : </Typography>
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