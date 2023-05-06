import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Typography, Grid, Checkbox } from '@mui/material'
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../styles/Profile.css'

function Profile() {
  return (
    <Box>
      <Navbar />
      <Box
        class="ProfileBG"
        component='img'
        alt="Background"
        src="/src/assets/ProfileFolder.png"
      />
      <Box class="ProfilePicture">
      </Box>
      <Button class="profilebut pic">change profile picture</Button>
      <Button class="profilebut out" component={Link} to="/">sign out</Button>

      {/* <Grid container direction="column" justifyContent="flex-start" sx={{ margin: "0", width: "200px" }}>
        <Grid item>
          <Typography class="user name">username : </Typography>
        </Grid>
        <Grid item>
          <Typography class="user mail">email : </Typography>
        </Grid>
        <Grid item>
          <Typography class="user pass">password : </Typography>
        </Grid>
      </Grid> */}

      <Typography class="user name">username : </Typography>
      <Typography class="user mail">email : </Typography>
      <Typography class="user pass">password : </Typography>
      <Box sx={{
        borderBottom: "2px dashed #D78B8B", width: "40%",
        position: "absolute", left: "420px", bottom: "300px"
      }}></Box>
      <Typography class="setting">reminder setting</Typography>
      <Typography class="show">show upcoming event</Typography>
      <Typography class="show">show to-do list</Typography>
      <Typography class="show">show weekly schedule</Typography>
      <FormGroup sx={{ position: 'absolute', bottom: '170px', left: "1000px" }}>
        <FormControlLabel control={<Checkbox defaultChecked
          sx={{
            color: 'action.active',
            '&.Mui-checked': {
              color: '#565656',
            },
          }} />} label="" />
      </FormGroup>
      <FormGroup sx={{ position: 'absolute', bottom: '120px', left: "1000px" }}>
        <FormControlLabel control={<Checkbox defaultChecked
          sx={{
            color: 'action.active',
            '&.Mui-checked': {
              color: '#565656',
            },
          }} />} label="" />
      </FormGroup>
      <FormGroup sx={{ position: 'absolute', bottom: '70px', left: "1000px" }}>
        <FormControlLabel control={<Checkbox defaultChecked
          sx={{
            color: 'action.active',
            '&.Mui-checked': {
              color: '#565656',
            },
          }} />} label="" />
      </FormGroup>

      {/* <Checkbox defaultChecked />
      <Checkbox defaultChecked />
      <Checkbox defaultChecked /> */}

      <Box
        class="ProfileRab"
        component='img'
        alt="Background"
        src="/src/assets/ProfileRab.png"
        display={{xs:"none", md:"block"}}
      />
    </Box>
  )
}

export default Profile