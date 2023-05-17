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
      <Grid container
        direction="row"
        justifyContent="center"
      // alignItems="center"
      >
        <Grid item lg={5} display={{ xs: "none", lg: "block" }}>
          <Box
            class="TodoRabbit"
            component='img'
            alt="Don't forget to do your work"
            src="/src/assets/Todo_rab.png"
          />
        </Grid>

        <Grid item xs={12} lg={7} display={{ xs: "none", xl: "block" }} sx={{ paddingLeft: "20px" }}>
          <Box class="TitleBox">
            <Typography variant='h4' class="TodoText">Todo</Typography>
            <Box class="CountTodo">
              {todo.length}
            </Box>
            <Button class="but complete">complete all</Button>
            <Button class="but delete" onClick={popup}>delete all</Button>

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
        </Grid>

        <Grid item lg={7} display={{ xs: "none", lg: "block", xl: "none" }} sx={{ paddingLeft: "20px" }}>
          <Box class="TitleBox">
            <Typography variant='h4' class="TodoText">Todo</Typography>
            <Box class="CountTodo">
              {todo.length}
            </Box>
            <Button class="but complete">complete all</Button>
            <Button class="but delete" onClick={popup}>delete all</Button>

            <Box class="cardtodo1">
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
        </Grid>

        <Grid item xs={12} display={{ xs: "none", sm: "block", lg: "none" }} sx={{ paddingLeft: "20px" }}>
          <Box class="TitleBox">
            <Typography variant='h4' class="TodoText">Todo</Typography>
            <Box class="CountTodo">
              {todo.length}
            </Box>
            <Button class="but complete">complete all</Button>
            <Button class="but delete" onClick={popup}>delete all</Button>

            <Box class="cardtodo2">
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
        </Grid>

        <Grid item xs={12} display={{ xs: "block", sm: "none" }} sx={{ paddingLeft: "20px" }}>
          <Box class="TitleBox">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", height: "75px" }}>
                <Typography variant='h4' class="TodoText">Todo</Typography>
                <Box class="CountTodo">
                  {todo.length}
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Button class="but complete1">complete all</Button>
                <Button class="but delete1" onClick={popup}>delete all</Button>
              </Box>

              <Box class="cardtodo3">
                <TodoCard Task={task1} />
              </Box>
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
        </Grid>
      </Grid>
    </Box>
  )
}


export default Todo