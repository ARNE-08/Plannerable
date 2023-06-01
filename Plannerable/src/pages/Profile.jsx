import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { Box, Button, Typography, Grid, Checkbox, Modal, TextField } from '@mui/material'
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../styles/Profile.css'

import { AxiosError } from 'axios';
import Axios from '../axios/AxiosInstance'
import GlobalContext from '../context/GlobalContext';
import Cookies from 'js-cookie';

function Profile() {
  const [open, setOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState();
  const [profilePictureError, setProfilePictureError] = useState('');
  const [profile, setProfile] = useState();
  const [profileUser, setProfileUser] = useState([])

  const { status, setStatus } = useContext(GlobalContext)
  const { user, setUser } = useContext(GlobalContext)

  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  useEffect(() => {
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

    Axios.get("/getProfilePic")
      .then((response) => {
        const responseData = response.data;
        if (responseData.success) {
          setProfile(responseData.data);
        } else {
          // Handle unsuccessful response
        }
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });

    Axios.get("/getUser")
      .then((response) => {
        const responseData = response.data;
        if (responseData.success) {
          setProfileUser(responseData.data);
        } else {
          // Handle unsuccessful response
        }
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, []);


  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  // const handleProfilePictureChange = (event) => {
  //   setProfilePicture(event.target.value);
  // };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    try {
      // 2. call API to update note
      const userToken = Cookies.get('user');
      const response = await Axios.patch(
        '/changeProfilePic',
        {
          profile_picture: profilePicture
        },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      // 3. if successful, update note in state and close modal
      if (response.data.success) {
        setProfile((prevProfile) => ({ ...prevProfile, profile_picture: profilePicture }));
        setStatus({ severity: 'success', msg: 'Update profile successfully' });
        handleCloseModal();
      }
    } catch (error) {
      // 4. if update note failed, check if error is from calling API or not
      if (error instanceof AxiosError && error.response) {
        setStatus({ severity: 'error', msg: error.response.data.error });
      } else {
        setStatus({ severity: 'error', msg: error.message });
      }
    }

  };

  const validateForm = () => {
    let isValid = true;
    //check user
    if (!profilePicture) {
      setProfilePictureError('Profile URL is required');
      isValid = false;
    }
    return isValid;
  }

  const handlelogout = () => {
    Cookies.remove('user');
    navigate('/')
  }

  return (
    <div>
      {user ? (
        <div>
          <Box>
            <Navbar />
            <Box
              class="ProfileBG"
              component='img'
              alt="Background"
              src="/src/assets/ProfileFolder.png"
            />
            <Box
              class="ProfilePicture"
              component='img'
              alt="Background"
              src={profile?.profile_picture}
            />
            {/* <Box class="ProfilePicture">
      </Box> */}
            <Button class="profilebut pic" onClick={handleOpenModal}>Change profile picture</Button>
            <Button class="profilebut out" onClick={handlelogout}>Sign out</Button>

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

            <Typography class="user name">Username : {profileUser.username}</Typography>
            <Typography class="user mail">Email : {profileUser.email}</Typography>
            <Typography class="user pass">Password : ********</Typography>
            {/* <Box sx={{
        borderBottom: "2px dashed #D78B8B", width: "40%",
        position: "absolute", left: "420px", bottom: "300px"
      }}></Box>
      <Typography class="setting">Reminder setting</Typography>
      <Typography class="show">Show upcoming event</Typography>
      <Typography class="show">Show to-do list</Typography>
      <Typography class="show">Show weekly schedule</Typography>
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
      </FormGroup> */}

            {/* <Checkbox defaultChecked />
      <Checkbox defaultChecked />
      <Checkbox defaultChecked /> */}

            <Box
              class="ProfileRab"
              component='img'
              alt="Background"
              src="/src/assets/ProfileRab.png"
              display={{ xs: "none", md: "block" }}
            />

            <Modal open={open} onClose={handleCloseModal}>
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', p: 4, width: 400 }}>
                <TextField
                  label="Profile Picture URL"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                  error={profilePictureError !== ''}
                  helperText={profilePictureError}
                  // onChange={handleProfilePictureChange} 
                  fullWidth />
                <Button onClick={handleSubmit}>Submit</Button>
              </Box>
            </Modal>
          </Box>

        </div>
      ) :
        (
          (<div>
            <p>Only login user are allowed</p>
            <Button onClick={handleBack}>Back to splash screen</Button>
          </div>)
        )}
    </div>
  )
}

export default Profile