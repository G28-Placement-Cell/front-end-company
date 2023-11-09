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
import {Autocomplete } from '@mui/material'
import { PostAdd as PostAddIcon, Add as AddIcon  } from '@mui/icons-material';
import '../CSS_files/AnnouncementSection.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const AnnouncementSection = ({ title }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [announcementText, setAnnouncementText] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  const [searchInput, setSearchInput] = useState(""); // Add searchInput state
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]); // Add filteredAnnouncements state

  useEffect(() => {
    fetch('http://localhost:8000/api/announcements/admin/student', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAnnouncements(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (value) => {
    setSearchInput(value);
    const filtered = announcements.filter((announcement) =>
      announcement.title.toLowerCase().includes(value.toLowerCase()) ||
      announcement.description.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredAnnouncements(filtered);
  };
  

  const handleAnnouncementChange = (e) => {
    setAnnouncementText(e.target.value);
  };

  const handleSubmitAnnouncement = () => {
    if (announcementText.trim() !== '') {
      const newAnnouncement = {
        id: new Date().getTime(),
        text: announcementText,
        timestamp: new Date().toLocaleString(),
      };

      setAnnouncements([...announcements, newAnnouncement]);
      setAnnouncementText('');
    }
  };

  // Simulate loading for 2 seconds (you should replace this with your actual data fetching code)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  

  const navigate = useNavigate();

  return (
          <div style={{ position: 'relative' , padding:'20px'}}>
            <Paper sx={{ py: 1, px: 3 }} className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ pt: 1, pb: 1 }}>
            Announcements for Students {title}:
          </Typography>
          <Autocomplete
            disablePortal
            id="search-announcement"
            options={announcements.map((announcement) => announcement.title)}
            value={searchInput}
            onChange={(_, newValue) => handleSearch(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search title"
                sx={{
                  width: 350,
                  margin: '10px auto',
                }}
              />
            )}
          />
        </div>

        {loading ?(
    <p>Loading...</p>
  ) : (
  announcements && announcements.length > 0 ? (
    <List className="list">
      {(searchInput ? filteredAnnouncements : announcements)
        .slice()
        .reverse()
        .map((announcement, index) => (
          <ListItem key={index} className="item">
            <ListItemText
              primary={
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>{announcement.title}</Typography>
                </div>
              }
              secondary={
                <div>
                  <Typography>{announcement.description}</Typography>
                  <Typography
                    sx={{ fontSize: 12, fontStyle: "italic", textAlign: "right" }}
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
    <div style={{ minHeight: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography sx={{ textAlign: 'center' }} variant="body1">
        {searchInput ? "No matching announcements found" : "No data to display"}
      </Typography>
    </div>
  )
)}

      </Paper>

      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 60, right: 20 }}
        onClick={() => navigate('/addAnnouncementStudent')}
      >
        <AddIcon/>
      </Fab>
    </div>
  );
};

export default AnnouncementSection;
