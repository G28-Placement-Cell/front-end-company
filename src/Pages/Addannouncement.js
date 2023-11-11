import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Paper,
    Container,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import '../CSS_files/AnnouncementSection.css'

const AddAnnouncement = () => {

    const company_id = localStorage.getItem('companyInfo');
    const id = company_id ? JSON.parse(company_id)._id : null;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [announcements, setAnnouncements] = useState([]); // Add announcements state


    // const {id} = useParams();
    // const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(id);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        // Create a new announcement object
        const newAnnouncement = {
            title,
            description,
            date: date.toISOString(),
        };

        console.log(newAnnouncement);

        try {
            const res = await fetch(`http://localhost:8000/api/announcements/company/${id}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(newAnnouncement),
            });

            const data = await res.json();
            console.log(data);

            if (!res.ok) {
                throw new Error(data.message);
            }

            setLoading(false);
            setSuccess(true);
            setError("");
            navigate("/announcements/company");
        }
        catch (err) {
            setLoading(false);
            setSuccess(false);

            if (err.message) {
                setError(err.message);
            }
            else {
                setError("Something went wrong. Please try again later.");
            }
        }
    }

    // Use useEffect to fetch announcements and populate 'announcements' state
    useEffect(() => {
        // Example fetchAnnouncements function
        // Replace with your actual API call
        async function fetchAnnouncements() {
            try {
                const response = await fetch(`http://localhost:8000/api/announcements/company/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setAnnouncements(data);
                    // setFilteredAnnouncements(data);
                } else {
                    throw new Error("Failed to fetch announcements");
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchAnnouncements();
    }, []);

    return (
        <div style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            padding: "5vh 5vw",
        }}>
            <Paper sx={{ py: 1, px: 3 }} className="container">
                <Typography variant="h4" sx={{ mt: 3 }} align="center" gutterBottom>
                    Add Announcement for Student
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Title"
                        fullWidth
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        variant="outlined"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        margin="normal"
                        multiline
                        rows={2}
                        required
                    />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type="submit" variant="contained" color="primary" sx={{ my: 2, width: '15vw' }}>
                            Post Announcement
                        </Button>
                    </div>
                </form>

            </Paper>
        </div>
    );
};

export default AddAnnouncement;