import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Paper, Typography } from '@mui/material';

export const Errored = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const companyInfoJSON = localStorage.getItem('companyInfo');
    }, []);

    return (
        <div style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            padding: "5vh 5vw",
        }}>
            <Paper sx={{ py: 1, px: 3, display: 'flex', flexDirection:'column' , justifyContent: 'center', alignItems: 'center', minHeight: '73vh' }} className="container">
                <Typography variant="h4" sx={{mb:1}}>
                    Page Not Found
                </Typography>
                {localStorage.getItem('companyInfo') ? (
                    <Button variant='contained' sx={{width:'260px'}} onClick={() => navigate('/companyprofile')}>
                        Back to Company Profile
                    </Button>
                ) : (
                    <Button variant='contained' sx={{width:'200px'}} onClick={() => navigate('/')}>
                        Back to Login
                    </Button>
                )}
            </Paper>
        </div>
    );
};
