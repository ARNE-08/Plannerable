import React from 'react'
import { Box, Typography, Checkbox, Grid } from '@mui/material'
import '../styles/TodoCard.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

function TodoCard({ name, deadline }) {
    const formattedDeadline = new Date(deadline).toLocaleDateString();

    return (
        <>
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
                    <Typography class="todoname">{name} | <strong> Deadline : </strong> {formattedDeadline}</Typography>
                    <Box class="deletebut">
                        <Box class="deleteicon">
                            <DeleteOutlineRoundedIcon
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
                    <Typography class="todoname">{name} | <strong> Deadline : </strong> {deadline}</Typography>
                    <Box class="deletebut">
                        <Box class="deleteicon">
                            <DeleteOutlineRoundedIcon
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
                    <Typography class="todoname">{name} | <strong> Deadline : </strong> {deadline}</Typography>
                    <Box class="deletebut">
                        <Box class="deleteicon">
                            <DeleteOutlineRoundedIcon
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
                    <Typography class="todoname">{name}</Typography>
                    <Box class="deletebut">
                        <Box class="deleteicon">
                            <DeleteOutlineRoundedIcon
                                sx={{ color: "white", fontSize: "2em", position: "relative", right: "20px", top: "22px" }} />
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default TodoCard