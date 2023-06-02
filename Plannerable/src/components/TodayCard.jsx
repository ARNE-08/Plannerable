import React from 'react'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import '../styles/TodayCard.css'

function TodayCard({name, deadline}) {
    const formattedDeadline = new Date(deadline).toLocaleDateString();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/todo')
    }

    return (
        <div className="BiggestBox" onClick={handleClick}>
            <Typography class="TodayCardTitle">Todo</Typography>

            <Typography class="TodayCardBody">{name} | Deadline : {formattedDeadline}</Typography>
        </div>
    )
}

export default TodayCard