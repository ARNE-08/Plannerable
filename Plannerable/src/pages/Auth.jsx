import React from 'react'
import '../styles/Auth.css'
import Login from '../components/Login'
import Register from '../components/Register'
import SnackBarMessage from '../components/SnackBarMessage'
import { Box, Snackbar } from '@mui/material'
import { useState, useMemo } from 'react'
import GlobalContext from '/src/context/GlobalContext'

function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [status, setStatus] = useState('');
    const [user, setUser] = useState();

    const globalContextValue = useMemo(() => {
        return {
            user,
            setUser,
            setStatus,
        };
    }, [user]);

    const generatekey = () => {
        return Math.random();
    };

    return (
        <GlobalContext.Provider value={globalContextValue}>
            <Box class="UserAuthPage">
                {isLogin ? (
                    <Login setIsLogin={setIsLogin} />
                ) : (
                    <Register setIsLogin={setIsLogin} />
                )}
                {status ? (
                    <SnackBarMessage key={generatekey()} open={status.open} severity={status.severity} message={status.msg} />
                ) : null}
            </Box>
        </GlobalContext.Provider>
    )
}

export default Auth