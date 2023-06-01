import React from 'react'
import { Typography } from '@mui/material'
import '../styles/TodayCard.css'

function TodayCard({name, deadline}) {
    const formattedDeadline = new Date(deadline).toLocaleDateString();

    return (
        <div className="BiggestBox">
            <Typography class="TodayCardTitle">Todo</Typography>

            <Typography class="TodayCardBody">{name} | Deadline : {formattedDeadline}</Typography>
        </div>
    )
}

export default TodayCard