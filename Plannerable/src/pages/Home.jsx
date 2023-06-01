import React, { useContext, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Box, Typography, Button, TextField } from '@mui/material'
import { NavLink } from 'react-router-dom'
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import TodayCard from '../components/TodayCard';

import Cookies from 'js-cookie';
import { AxiosError } from 'axios';
import Axios from '../axios/AxiosInstance';

function Home() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 to the month since it is zero-based
    const date = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${date}`;

    const { user, setUser } = useContext(GlobalContext)
    const { status, setStatus } = useContext(GlobalContext)
    const [note, setNote] = useState('')
    const [newNote, setNewNote] = useState('')
    const [newNoteError, setNewNoteError] = useState('')
    const [isEdit, setIsEdit] = useState(false)

    const [todayTodo, setTodayTodo] = useState([])
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    const handleSetEdit = () => {
        console.log(newNote.user_note)
        setIsEdit(true)
    }

    const handleCancel = () => {
        setIsEdit(false)
    }

    useEffect(() => {
        // console.log(formattedDate)
        Axios.get("/isLogin")
            .then((response) => {
                const responseData = response.data;
                if (responseData.success) {
                    setUser(responseData.success);
                } else {
                    // Handle unsuccessful response
                }
            })
            .catch((error) => {
                console.log("error")
                if (error instanceof AxiosError) {
                    if (error.response) {
                        return setStatus({
                            msg: error.response.data.error,
                            severity: 'error',
                        });
                    }
                }
                return setStatus({
                    msg: error.message,
                    severity: 'error',
                });
            });

        Axios.get("/getTodayTodo?today=" + formattedDate)
            .then((response) => {
                const responseData = response.data;
                if (responseData.success) {
                    setTodayTodo(responseData.data);
                    console.log(formattedDate)
                    // console.log(todayTodo)
                    // console.log(responseData.data);
                } else {
                    // Handle unsuccessful response
                }
            })
            .catch((error) => {
                console.log("error")
                if (error instanceof AxiosError) {
                    if (error.response) {
                        return setStatus({
                            msg: error.response.data.error,
                            severity: 'error',
                        });
                    }
                }
                return setStatus({
                    msg: error.message,
                    severity: 'error',
                });
            });

        Axios.get("/getNote")
            .then((response) => {
                const responseData = response.data;
                if (responseData.success) {
                    setNote(responseData.data);
                    setNewNote(responseData.data)
                    // console.log(note.user_note)
                } else {
                    // Handle unsuccessful response
                }
            })
            .catch((error) => {
                console.log("error")
                if (error instanceof AxiosError) {
                    if (error.response) {
                        return setStatus({
                            msg: error.response.data.error,
                            severity: 'error',
                        });
                    }
                }
                return setStatus({
                    msg: error.message,
                    severity: 'error',
                });
            });
    }, []);

    // console.log(todayTodo)
    const handleSaveEdit = async () => {
        try {
            const userToken = Cookies.get('user');
            const response = await Axios.patch('/editNote', {
                user_note: newNote.user_note
            },
                { headers: { Authorization: `Bearer ${userToken}` }, });
            if (response.data.success) {
                setStatus({
                    msg: 'Note has been updated',
                    severity: 'success'
                });
                setNote(newNote);
                setIsEdit(false)
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
        // setIsEdit(false)
    }

    return (
        <div>
            {user ? (
                <div>
                    <Box class="Homepage">
                        <Navbar />

                        <div className="Calendar">Calendar is coming soon...</div>

                        <Typography variant='h5' class="reminderTitle">
                            Today's reminder
                        </Typography>
                        <Box class="reminderBox">
                            <div className="todaycardbox">
                                {todayTodo.map((todo) => (
                                    <TodayCard name={todo.name} deadline={todo.deadline} />
                                ))}
                                {/* <TodayCard /> */}
                            </div>
                        </Box>

                        <Box class="NoteBox">
                            <Box class="EditNav">
                                <button class="EditBut" onClick={handleSetEdit}>
                                    <Box class="EditIcon">
                                        <EditNoteRoundedIcon />
                                    </Box>
                                </button>
                            </Box>

                            <div class="divpos">
                                <Typography variant='h5' class="NoteTitle">Note :</Typography>
                                {isEdit ? (
                                    <div class="divpos2">
                                        <TextField
                                            id="standard-multiline-static"
                                            multiline
                                            rows={4}
                                            value={newNote.user_note}
                                            onChange={(e) => setNewNote({ ...newNote, user_note: e.target.value })}
                                            error={newNoteError !== ''}
                                            helperText={newNoteError}

                                            variant="standard"
                                            sx={{ position: "absolute", top: "-69px", right: "70px", width: "330px" }}
                                        />
                                        <Button onClick={handleCancel}
                                            sx={{ position: "absolute", right: "130px", top: "50px", background: "#D9D9D9", color: "#565656", borderRadius: "20px" }}
                                        >
                                            Cancel</Button>
                                        <Button onClick={handleSaveEdit}
                                            sx={{ position: "absolute", right: "60px", top: "50px", background: "#B2A4FF", color: "white", borderRadius: "20px" }}
                                        >
                                            Save</Button>
                                    </div>
                                ) : (
                                    <div class="divpos1">
                                        <Typography class="NoteBody">{note.user_note}</Typography>
                                    </div>
                                )}
                            </div>
                        </Box>

                        <Box
                            class="RabbitFoot"
                            component='img'
                            alt="Note"
                            src="/src/assets/Foot.png"
                        />
                    </Box>
                </div>
            ) :
                (<div>
                    <p>Only login user are allowed</p>
                    <Button onClick={handleBack}>Back to splash screen</Button>
                </div>)
            }
        </div>
    )
}

export default Home