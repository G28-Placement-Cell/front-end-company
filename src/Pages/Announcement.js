import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Box,
  Fab,
} from '@mui/material';
import { Autocomplete } from "@mui/material";
import { PostAdd as PostAddIcon, Add as AddIcon } from '@mui/icons-material';
import '../CSS_files/AnnouncementSection.css'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

const Announcements = ({ title }) => {

  // const {id} = useParams();
  const company_id = localStorage.getItem('companyInfo');
  const id = company_id ? JSON.parse(company_id)._id : null;
  // console.log(id);
  const [announcements, setAnnouncements] = useState([]);
  const [announcementText, setAnnouncementText] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  const [searchInput, setSearchInput] = useState(""); // Add searchInput state
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]); // Add filteredAnnouncements state
  useEffect(() => {
    // console.log(localStorage.getItem('token'));
    fetch('https://back-end-production-3140.up.railway.app/api/company/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => res.json()).then((data) => {
      // console.log(data);
      // console.log(data.comp.isVerified)
      if (data.comp.isVerified == false) {
        // alert("Your profile is not verified yet");
        navigate('/nv');
      }
      setLoading(false);
    }).catch((err) => {
      // console.log(err);
      setLoading(false);
    });
  }, [])
  useEffect(() => {
    fetch(`https://back-end-production-3140.up.railway.app/api/announcements/company/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAnnouncements(data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  }, []);
  // console.log(id);



  // Simulate loading for 2 seconds (you should replace this with your actual data fetching code)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleSearch = (value) => {
    if (!value) {
      setSearchInput(value);
      setFilteredAnnouncements(announcements);
      return;
    }

    setSearchInput(value);
    const filtered = announcements.filter(
      (announcement) =>
        announcement?.title?.toLowerCase().includes(value.toLowerCase()) ||
        announcement?.description?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAnnouncements(filtered);
  };
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', padding: "5vh 5vh" }}>
      <Paper sx={{ py: 1, px: 3 }} className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant="h5" sx={{ pt: 1, pb: 1 }}>
              Announcements for Students {title}:
            </Typography>
            <Autocomplete
              disablePortal
              id="search-announcement"
              options={filteredAnnouncements.map((announcement) => announcement.title)}
              value={searchInput}
              onChange={(_, newValue) => handleSearch(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search title"
                  sx={{
                    width: '100%',
                    margin: "10px auto",
                  }}
                />
              )}
            />
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : announcements && announcements.length > 0 ? (
          <List className="list">
            {(searchInput ? filteredAnnouncements : announcements)
              .slice()
              .reverse()
              .map((announcement, index) => (
                <ListItem key={index} className="item">
                  <ListItemText
                    primary={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>{announcement.title}</Typography>
                      </div>
                    }
                    secondary={
                      <div>
                        <Typography>{announcement.description}</Typography>
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontStyle: "italic",
                            textAlign: "right",
                          }}
                          color="text.secondary"
                        >
                          {new Date(announcement.date).toLocaleString()}
                        </Typography>
                      </div>
                    }
                    secondaryTypographyProps={{ variant: "body2" }}
                  />
                </ListItem>
              ))}
          </List>
        ) : (
          <div
            style={{
              minHeight: "40vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ textAlign: "center" }} variant="body1">
              {searchInput
                ? "No matching announcements found"
                : "No data to display"}
            </Typography>
          </div>
        )}
      </Paper>

      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 60, right: 20 }}
        onClick={() => navigate('/addAnnouncementStudent')}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Announcements;