import React, { useState, useContext } from 'react'
import { Box, Typography, Checkbox, Grid, Modal, Button, TextField } from '@mui/material'
import '../styles/TodoCard.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import EditTodo from '../pages/EditTodo';
import MyDatePicker from '../components/BasicDatePicker'
import TimePickerComponent from '../components/BasicTimePicker'

import { AxiosError } from 'axios';
import Axios from '../axios/AxiosInstance';
import GlobalContext from '../context/GlobalContext';

function TodoCard({ todo }) {
    const { status, setStatus } = useContext(GlobalContext)

    const formattedDeadline = new Date(todo.deadline).toLocaleDateString();
    // const [edit, setEdit] = useState(false)
    const [open, setOpen] = useState(false);
    // const [editName, setEditName] = useState('')
    const [editNameError, setEditNameError] = useState('')
    // const [editDeadline, setEditDeadline] = useState('')
    // const [editTime, setEditTime] = useState('')
    // const [editDescription, setEditDescription] = useState('')
    const [editDescriptionError, setEditDescriptionError] = useState('')
    const [deadline, setDeadline] = useState(null)
    const [todoTime, setodoTime] = useState(null)
    const [newTodo, setNewTodo] = useState(todo)

    const navigate = useNavigate();
    const handleOpenEditModal = () => {
        setOpen(true);
    };
    const handleCloseEditModal = () => {
        setOpen(false);
    };

    const handleDateChange = (date) => {
        setDeadline(date)
    }
    // todo.deadline = deadline ? deadline.toISOString().split('T')[0] : null;

    const handleTimeChange = (time) => {
        setodoTime(time)
    }
    // todo.time = todoTime ? todoTime.toISOString().split('T')[1].split('.')[0] : null;

    const handleNameChange = (e) => {
        setNewTodo({
            ...newTodo,
            name: e.target.value,
        });
    };

    const handleDescriptionChange = (e) => {
        setNewTodo({
            ...newTodo,
            description: e.target.value,
        });
    };

    const handleSubmit = async () => {
        // console.log(deadline)
        // console.log(todoTime)
        if (!validateForm()) return;
        // console.log(status)
        // console.log(todoTime);
        const formattedDate = deadline ? deadline.toISOString().split('T')[0] : null;
        const formattedTime = todoTime ? todoTime.toISOString().split('T')[1].split('.')[0] : null;
        try {
            const response = await Axios.patch('/editTodo', {
                name: newTodo.name,
                deadline: formattedDate,
                time: formattedTime,
                description: newTodo.description,
                id: todo.id
            });
            if (response.data.success) {
                setStatus({
                    msg: 'To-do list has been updated',
                    severity: 'success'
                });
                todo.deadline = formattedDate
                todo.time = formattedTime
                todo.name = newTodo.name
                handleCloseEditModal()
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
        if (!newTodo.name) {
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
        <div>
            <Grid container display={{ xs: "none", xl: "block" }}>
                <Box class="Todocard">
                    <FormGroup sx={{ position: "relative", top: "17px", left: "30px" }}>
                        <FormControlLabel control={<Checkbox
                            sx={{
                                color: '#B17F3F',
                                '&.Mui-checked': {
                                    color: '#B17F3F',
                                },
                                // zIndex:"99"
                            }} />} label="" />
                    </FormGroup>
                    <Typography class="todoname">{todo.name} | <strong> Deadline : </strong> {formattedDeadline} | Time : {todo.time}</Typography>
                    <Box class="deletebut" onClick={handleOpenEditModal}>
                        <Box class="deleteicon">
                            <EditIcon
                                sx={{ color: "white", fontSize: "2em", position: "relative", right: "20px", top: "22px" }} />
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid container display={{ xs: "none", lg: "block", xl: "none" }}>
                <Box class="Todocard1">
                    <FormGroup sx={{ position: "relative", top: "17px", left: "30px" }}>
                        <FormControlLabel control={<Checkbox
                            sx={{
                                color: '#B17F3F',
                                '&.Mui-checked': {
                                    color: '#B17F3F',
                                },
                                // zIndex:"99"
                            }} />} label="" />
                    </FormGroup>
                    <Typography class="todoname">{todo.name} | <strong> Deadline : </strong> {formattedDeadline} | Time : {todo.time}</Typography>
                    <Box class="deletebut" onClick={handleOpenEditModal}>
                        <Box class="deleteicon">
                            <EditIcon
                                sx={{ color: "white", fontSize: "2em", position: "relative", right: "20px", top: "22px" }} />
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid container display={{ xs: "none", sm: "block", lg: "none" }}>
                <Box class="Todocard2">
                    <FormGroup sx={{ position: "relative", top: "17px", left: "30px" }}>
                        <FormControlLabel control={<Checkbox
                            sx={{
                                color: '#B17F3F',
                                '&.Mui-checked': {
                                    color: '#B17F3F',
                                },
                                // zIndex:"99"
                            }} />} label="" />
                    </FormGroup>
                    <Typography class="todoname">{todo.name} | <strong> Deadline : </strong> {formattedDeadline}</Typography>
                    <Box class="deletebut" onClick={handleOpenEditModal}>
                        <Box class="deleteicon">
                            <EditIcon
                                sx={{ color: "white", fontSize: "2em", position: "relative", right: "20px", top: "22px" }} />
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid container display={{ xs: "block", sm: "none" }}>
                <Box class="Todocard2">
                    <FormGroup sx={{ position: "relative", top: "17px", left: "30px" }}>
                        <FormControlLabel control={<Checkbox
                            sx={{
                                color: '#B17F3F',
                                '&.Mui-checked': {
                                    color: '#B17F3F',
                                },
                                // zIndex:"99"
                            }} />} label="" />
                    </FormGroup>
                    <Typography class="todoname">{todo.name}</Typography>
                    <Box class="deletebut" onClick={handleOpenEditModal}>
                        <Box class="deleteicon">
                            <EditIcon
                                sx={{ color: "white", fontSize: "2em", position: "relative", right: "20px", top: "22px" }} />
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Modal open={open} onClose={handleCloseEditModal}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', p: 4, width: 400 }}>
                    <TextField
                        required
                        label="Name"
                        id="outlined-required"
                        // defaultValue={todo.name}
                        value={newTodo.name}
                        onChange={handleNameChange}
                        error={editNameError !== ''}
                        helperText={editNameError}

                        sx={{ marginBottom: "10px" }}
                        fullWidth />
                    <div class="DateMargin">
                        <MyDatePicker onDateChange={handleDateChange} />
                    </div>
                    <div class="TimeMargin">
                        <TimePickerComponent onTimeChange={handleTimeChange} />
                    </div>
                    <TextField
                        label="Descriotion (optional)"
                        id="outlined-required"
                        // defaultValue={todo.description}
                        value={newTodo.description}
                        onChange={handleDescriptionChange}
                        error={editDescriptionError !== ''}
                        helperText={editDescriptionError}

                        sx={{ marginBottom: "15px" }}
                        fullWidth />
                    <Button onClick={handleSubmit}>Save</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default TodoCard