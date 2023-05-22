import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Grid, Typography, TextField } from '@mui/material'
import '../styles/AddTodo.css'
import MyDatePicker from '../components/BasicDatePicker'
import TimePickerComponent from '../components/BasicTimePicker'
import { useState, useContext } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

import { AxiosError } from 'axios'
import Axios from '../axios/AxiosInstance'
import GlobalContext from '../context/GlobalContext'

function AddTodo() {
  const { status, setStatus } = useContext(GlobalContext)
  const { user, setUser } = useContext(GlobalContext)

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [description, setDescription] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const [deadline, setDeadline] = useState(null)
  const [todoTime, setodoTime] = useState(null)

  const navigate = useNavigate();

  const handleBack = () => {
      navigate('/')
  }

  const handleCancel = () => {
    navigate('/todo')
  }

  const handleDateChange = (date) => {
    setDeadline(date)
  }

  const handleTimeChange = (time) => {
    setodoTime(time)
  }

  const handleSubmit = async () => {
    // console.log(deadline)
    // console.log(todoTime)
    if (!validateForm()) return;
    // console.log(status)
    // console.log(todoTime);
    const formattedDate = deadline ? deadline.toISOString().split('T')[0] : null;
    const formattedTime = todoTime ? todoTime.toISOString().split('T')[1].split('.')[0] : null;
    try {
      const response = await Axios.post('/addTodo', {
        name,
        deadline: formattedDate,
        time: formattedTime,
        description
      });
      if (response.data.success) {
        setStatus({
          msg: 'To-do list has been created',
          severity: 'success'
        });
        navigate('/todo');
      }
      else {
        console.log(response.data.error)
        setStatus({
          msg: response.data.error,
          severity: 'error'
        });
      }
    } catch (e) {
      if (e instanceof AxiosError)
        if (e.response)
          return setStatus({
            msg: e.response.data.error,
            severity: 'error',
          });
      return setStatus({
        msg: e.message,
        severity: 'error',
      });
    }
  }

  const validateForm = () => {
    let isValid = true;
    if (!name) {
      setUsernameError('Name is required');
      isValid = false;
    }
    if (!deadline) {
      setStatus({
        msg: 'Deadline is required',
        severity: 'error'
      });
      isValid = false;
    }
    if (!todoTime) {
      setStatus({
        msg: 'Time is required',
        severity: 'error'
      });
      isValid = false;
    }
    return isValid;
  }

  return (
    <>
      {user ? (
        <div>
          <Navbar />
          <Box class="AddTodoBox">
            <Box class="AddBox"></Box>
            <Box sx={{ zIndex: "99" }}>
              <Button class="addbut can" onClick={handleCancel}>Cancel</Button>
              <Button class="addbut add" onClick={handleSubmit}>Add</Button>
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
                <MyDatePicker onDateChange={handleDateChange} />
              </Box>

              <Typography class="Todolabel">Time : </Typography>
              <Box class="TimeInput">
                <TimePickerComponent onTimeChange={handleTimeChange} />
              </Box>

              <Typography class="Todolabel">Note (optional) : </Typography>
              <TextField
                id="standard-multiline-static"
                multiline
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                error={descriptionError !== ''}
                helperText={descriptionError}

                variant="standard"
                sx={{ position: "absolute", top: "407px", left: "400px", width: "900px" }}
              />
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
        </div>
      ) :
        (<div>
          <p>Only login user are allowed</p>
          <Button onClick={handleBack}>Back to splash screen</Button>
        </div>)}
    </>
  )
}

export default AddTodo