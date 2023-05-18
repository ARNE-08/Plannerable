import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Todo.css'
import { Box, Typography, Button, Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import TodoCard from '../components/TodoCard'

import { AxiosError } from "axios"
import Axios from '../axios/AxiosInstance'

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    Axios.get("/getAllTodos")
      .then((response) => {
        const responseData = response.data;
        if (responseData.success) {
          setTodos(responseData.data);
        } else {
          // Handle unsuccessful response
        }
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, []);

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
              {todos.length}
            </Box>
            <Button class="but complete">complete all</Button>
            <Button class="but delete" onClick={popup}>delete all</Button>

            <Box class="cardtodo">
              {todos.map((todo) => (
                <TodoCard name={todo.name} deadline={todo.deadline} />
              ))}
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
              {todos.length}
            </Box>
            <Button class="but complete">complete all</Button>
            <Button class="but delete" onClick={popup}>delete all</Button>

            <Box class="cardtodo1">
              {todos.map((todo) => (
                <TodoCard name={todo.name} deadline={todo.deadline} />
              ))}
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
              {todos.length}
            </Box>
            <Button class="but complete">complete all</Button>
            <Button class="but delete" onClick={popup}>delete all</Button>

            <Box class="cardtodo2">
              {todos.map((todo) => (
                <TodoCard name={todo.name} deadline={todo.deadline} />
              ))}
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
                  {todos.length}
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Button class="but complete1">complete all</Button>
                <Button class="but delete1" onClick={popup}>delete all</Button>
              </Box>

              <Box class="cardtodo3">
                {todos.map((todo) => (
                  <TodoCard name={todo.name} deadline={todo.deadline} />
                ))}
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