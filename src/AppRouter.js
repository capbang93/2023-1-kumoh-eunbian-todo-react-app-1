import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Box, Typography } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

function Copyright(){
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright "}
            fsoftwareengineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

class AppRouter extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path='/login' element={<Login/>} />
                           <Route path='/signup' element={<SignUp/>} />
                        <Route path='/' element={<App />} />
                    </Routes>
                </div>
                <div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRouter;