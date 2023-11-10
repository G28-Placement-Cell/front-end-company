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
import { PostAdd as PostAddIcon, Add as AddIcon } from '@mui/icons-material';
import '../CSS_files/AnnouncementSection.css'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

const Announcements = ({ title }) => {

  // const {id} = useParams();
  const company_id = localStorage.getItem('companyInfo');
  const id = company_id ? JSON.parse(company_id)._id : null;
  console.log(id);
  const [announcements, setAnnouncements] = useState([]);
  const [announcementText, setAnnouncementText] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  const [searchInput, setSearchInput] = useState(""); // Add searchInput state
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]); // Add filteredAnnouncements state

  useEffect(() => {
    fetch(`http://localhost:8000/api/announcements/company/${id}`, {
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
  // console.log(id);



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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative' ,paddingTop:20, paddingBottom: 20}}>
      <Paper sx={{ py: 1, px: 3 }} className="container">
        <Typography variant="h5" sx={{ pt: 1, pb: 1 }}>
          Announcements for Students {title}:
        </Typography>
        {loading ? (
          <p>Loading...</p>
        ) : (
          announcements && announcements.length > 0 ? (
            <List className="list">
              {announcements
                .slice() // Create a shallow copy of the array
                .reverse() // Reverse the order of announcements
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
                      secondaryTypographyProps={{ variant: "body2" }} // Customize secondary text style
                    />
                  </ListItem>
                ))}
            </List>
          ) : (
            <div style={{ minHeight: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ textAlign: 'center' }} variant="body1">No data to display</Typography>
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
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Announcements;