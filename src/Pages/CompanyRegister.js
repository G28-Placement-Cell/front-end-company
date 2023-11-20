import React from "react";
import { Container, Grid, Avatar, TextField, Button, Typography, CssBaseline } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import { useState } from "react";
import { useRegisterMutation } from "../slices/company/companyApislice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/company/authslice";
import { useLogoutMutation } from "../slices/company/companyApislice";
import { logout } from "../slices/company/authslice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const CompanyRegister = () => {
    const [companyname, setCompanyname] = React.useState('');
    const [hrname, setHrname] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [website, setWebsite] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [altpassword, setAltpassword] = React.useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const [logoutapicall] = useLogoutMutation();
    const navigate = useNavigate();


    function validatePassword(password) {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    };
    const logoutHandler = async () => {
        try {
            await logoutapicall().unwrap();
            dispatch(logout());
            navigate("/");
        } catch (error) {
            // console.log(error);
        }
    };

    // const verify = (e) => {
    //     e.preventDefault();
    //     if (password !== altpassword || password === '') {

    //         alert("Passwords do not match");
    //         setError(true);
    //     } else {
    //         setSubmitted(true);
    //         setError(false);
    //     }
    //     if (!error && submitted) {
    //         document.getElementById("com_reg").reset();
    //         alert("Submitted for verification");
    //     }

    // }

    const [register] = useRegisterMutation();

    // const navigate = useNavigate();
    // const isValidNumber = /^[0-9]{10}$/.test(contact) && parseInt(contact, 10) >= 0;
    //     if (!isValidNumber) {
    //         toast.error("Please enter valid mobile number");
    //         return;
    //     }

    const submitHandler = async (e) => {
        e.preventDefault();
        const isValidNumber = /^[0-9]{10}$/.test(contact) && parseInt(contact, 10) >= 0;
        if (!isValidNumber) {
            toast.error("Please enter valid mobile number");
            return;
        }
        if (password !== altpassword) {
            alert("Passwords do not match");
            setError(true);
        } else {
            setError(false);
            setSubmitted(true);
        }

        try {
            const res = await register({ companyname, hrname, contact, address, email, website, password, altpassword }).unwrap();
            dispatch(setCredentials({ ...res }));
            logoutHandler();
            navigate('/');
        } catch (error) {
            // console.log(error);
            toast.error(error);
        }

        if (!validatePassword(password)) {
            setError(true);
            toast.error('Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character');
            return;
        } else {
            setError(false);
        }
    }



    return (
        // <>
        // <CssBaseline />
        <div style={{ backgroundColor: '#e4eaf5' }}>
            {/* {console.log("CompanyRegister.js")} */}
            <Typography variant="h4" sx={{ pt: 3, fontWeight: "bold", textAlign: "center" }}>
                Company Registration
            </Typography>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <form id="com_reg" onSubmit={submitHandler} enctype="multipart/form-data" method="post">

                    <Container sx={{ mb: 10, display: "flex", flexDirection: 'column ', justifyContent: "center", alignItems: "center", }} >
                        <Grid item container md={8} sx={{ justifyContent: "center", mb: 0 }}>
                            {/* <Grid item sx={{ borderRight: 0, borderColor: "divider", mr: 5 }}> */}
                            <div style={{ padding: "2rem 0 5rem" }}>
                                <Grid container spacing={2} className="grid1">
                                    <TextField
                                        sx={{ mt: 2 }}
                                        label="Company Name"
                                        id="comp-name"
                                        name="comp-name"
                                        type="text"
                                        // variant="outlined"
                                        fullWidth
                                        onChange={(e) => setCompanyname(e.target.value)}
                                        required
                                    />
                                    <TextField
                                        label="HR Name"
                                        id="hr-name"
                                        name="hr-name"
                                        type="text"
                                        // variant="outlined"
                                        fullWidth
                                        onChange={(e) => setHrname(e.target.value)}
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Contact Number"
                                        id="contact"
                                        name="contact"
                                        type="tel"
                                        pattern="[1-9]{1}[0-9]{9}"
                                        // variant="outlined"
                                        onChange={(e) => setContact(e.target.value)}
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        sx={{ mt: 2 }}
                                        label="Company Postal Address"
                                        id="address"
                                        name="address"
                                        type="textarea"
                                        rows={3}
                                        multiline
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                        fullWidth
                                    />
                                    <TextField
                                        label="Email"
                                        id="email"
                                        name="email"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Password"
                                        id="password"
                                        name="password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        required={true}
                                        onChange={(e) => setPassword(e.target.value)}
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Confirm password"
                                        id="conf-password"
                                        name="conf-password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        required={true}
                                        onChange={(e) => setAltpassword(e.target.value)}
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="Website"
                                        id="website"
                                        name="website"
                                        type="text"
                                        variant="outlined"
                                        onChange={(e) => setWebsite(e.target.value)}
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                </Grid>
                            </div>
                        </Grid>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button fullWidth type="submit" variant="contained" sx={{}}>
                                Register
                            </Button>
                        </div>
                    </Container>
                </form>
            </div>
            {/* <Footer /> */}
        </div>
        // </>
    )
}
