import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import company from '../images/company.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useLoginMutation } from '../slices/company/companyApislice';
import { setCredentials } from '../slices/company/authslice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CompanyLogin = () => {

    const heading = {
        textAlign: 'center',
        margin: '20px 0',
    };

    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const inputStyles = {
        margin: '10px 0',
        width: '100%',
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const submitHandler = async (e) => {
        e.preventDefault();
        const loginData = {
            email,
            password
        };
        try {
            const response = await login(loginData).unwrap();
            dispatch(setCredentials(response));
            navigate('/profile');
        } catch (error) {
            toast.error(error.data.message);
            // (error);console.log
        }
    }


    return (
        <div style={{ backgroundColor: '#e4eaf5' }}>
            <Grid style={{ minHeight: '80vh' }} container>
                {/* Left 60% - Image */}
                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={8}>
                    <img src={company} alt="Admin Image" style={{ width: '64%', height: '100%', alignItems: 'center' }} />
                </Grid>

                {/* Right 40% - Admin Input Area */}
                <Grid item xs={4} component={Paper} elevation={3}>
                    <div style={{ padding: '20px' }}>
                        <Typography sx={heading} variant="h4" gutterBottom>
                            Company Login
                        </Typography>
                        {/* Admin login form */}
                        <form onSubmit={submitHandler}>
                            <TextField
                                label="Email"
                                id="email"
                                name="email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={inputStyles}
                            />
                            <TextField
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={inputStyles}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', padding: '10px' }}>
                                {/* Submit button */}
                                <Button type="submit" variant="contained" color="primary" sx={{ width: '70px' }}>
                                    Login
                                </Button>

                                {/* Register link */}
                                <a href='\register' style={{ textDecoration: 'none', color: 'blue' }} variant="contained" color="primary"> Register </a>
                                {/* Forgot Password link */}
                                <a href="/forgotpass" style={{ textDecoration: 'none', color: 'blue' }}>Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

