import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Todo.css'
import { Box, Typography, Button, Grid } from '@mui/material'
import { useState } from 'react'
import TodoCard from '../components/TodoCard'

function Todo() {
  const [todo, setTodo] = useState([]);
  const task1 = {
    Name: "Mini project",
    Deadline: "20 May 2023"
  }

  const popup = () => {
    document.getElementById("deleteBG").classList.add("popup")
    document.getElementById("deleteAlert").classList.add("popup")
  };

  const closepopup = () => {
    document.getElementById("deleteBG").classList.remove("popup")
    document.getElementById("deleteAlert").classList.remove("popup")
  };

  return (
    <Box class="TodoPage">
      <Navbar />
      <Box
        class="TodoRabbit"
        component='img'
        alt="Don't forget to do your work"
        src="/src/assets/Todo_rab.png"
      />

      <Box class="TitleBox">
        <Typography variant='h4' class="TodoText">Todo</Typography>
        <Box class="CountTodo">
          {todo.length}
        </Box>
        <Button class="but complete">complete all</Button>
        <Button class="but delete" onClick={popup}>delete all</Button>

        {/* <Grid container direction="row" spacing={2}>
          <Grid item>
            <Button class="but complete">complete all</Button>
          </Grid>

          <Grid item>
            <Button class="but delete">delete all</Button>
          </Grid>
        </Grid> */}
      </Box>
      {/* <Typography variant='h4' class="TodoText">Todo</Typography> */}

      <Box class="cardtodo">
        <TodoCard Task={task1} />
      </Box>

      <Box id="deleteBG">
        <Box id="deleteAlert">
          <Box class="warning">
            <Typography class="warningTitle">warning</Typography>
          </Box>
          <Typography class="warningText">deleted event / to-do list
            cannot be recovered</Typography>
          <Box>
            <Button class="warningbut can" onClick={closepopup}>cancel</Button>
            <Button class="warningbut del">delete</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Todo