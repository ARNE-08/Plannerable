import React from 'react'
import { Box, Typography, Checkbox } from '@mui/material'
import '../styles/TodoCard.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

function TodoCard(props) {
    return (
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
            <Typography class="todoname">{props.Task.Name} | <strong> Deadline : </strong> {props.Task.Deadline}</Typography>
            <Box class="deletebut">
                <Box class="deleteicon">
                    <DeleteOutlineRoundedIcon 
                    sx={{color:"white", fontSize:"2em", position:"relative", right:"20px", top:"22px"}}/>
                </Box>
            </Box>
        </Box>
    )
}

export default TodoCard