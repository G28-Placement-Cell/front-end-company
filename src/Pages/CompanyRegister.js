import React from "react";
import { Container, Grid, Avatar, TextField, Button, Typography } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { useState } from "react";
import Footer from "./JobProfile/Footer";




export const CompanyRegister = () => {
    const [email, setEmail] = React.useState('');
    const [domain, setDomain] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [altpassword, setAltpassword] = React.useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const verify = (e) => {
        e.preventDefault();
        if (password !== altpassword) {

            alert("Passwords do not match");
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
        if (!error && submitted) {
            document.getElementById("com_reg").reset();
            alert("Submitted for verification");
        }
    }
    return (
        <>
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 3, textAlign: "center" }}>
                Company Registration
            </Typography>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <form id="com_reg" onSubmit={verify}>

                    <Container sx={{ mb: 10, display: "flex", flexDirection: 'column ', justifyContent: "center", alignItems: "center", }} >
                        <Grid item container md={8} sx={{ justifyContent: "center", mb: 0 }}>
                            {/* <Grid item sx={{ borderRight: 0, borderColor: "divider", mr: 5 }}> */}
                            <div style={{ padding: "2rem 0 5rem" }}>
                                <Grid container spacing={2}>
                                    <TextField
                                        label="Company Name"
                                        id="comp-name"
                                        name="comp-name"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        sx={{ mt: 2 }}
                                        label="HR Name"
                                        id="hr-name"
                                        name="hr-name"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        sx={{ mt: 2 }}
                                        label="Contact Number"
                                        id="contact"
                                        name="contact"
                                        type="tel"
                                        pattern="[1-9]{1}[0-9]{9}"
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        sx={{ mt: 2 }}
                                        label="Company Postal Address"
                                        id="address"
                                        name="address"
                                        type="textarea"
                                        rows={3}
                                        multiline
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
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    {/* <TextField
                                        label="Eligibility Criteria"
                                        id="eligible"
                                        name="eligible"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <TextField
                                        label="CTC"
                                        id="ctc"
                                        name="ctc"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        sx={{ mt: 2 }}
                                    />
                                    <Box sx={{ minWidth: 300, mt: 2 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="domian" required >Domain</InputLabel>
                                            <Select
                                                labelId="domain"
                                                id="seldomain"
                                                value={domain}
                                                label="Domain"

                                                onChange={(e) => {
                                                    setDomain(e.target.value)
                                                }}
                                            >
                                                <MenuItem value={"it"}>IT</MenuItem>
                                                <MenuItem value={"ec"}>EC</MenuItem>
                                                <MenuItem value={"ct"}>CT</MenuItem>
                                                <MenuItem value={"consultancy"}>Consultancy</MenuItem>
                                                <MenuItem value={"other"}>Other</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box> */}
                                </Grid>
                            </div>
                            {/* </Grid> */}
                        </Grid>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button fullWidth type="submit" variant="contained" sx={{}}>
                                Register
                            </Button>
                        </div>
                    </Container>

                </form>
            </div>
            <Footer />
        </>
    )
}
