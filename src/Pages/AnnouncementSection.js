import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
} from '@mui/material';
import { FaBullhorn } from 'react-icons/fa';

const postedAnnouncementStyle = {
  backgroundColor: '#f0f0f0',
  border: '2px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
};

const announcementContentStyle = {
  margin: '10px',
};

const announcementIconStyle = {
  fontSize: '24px',
  marginRight: '10px',
  verticalAlign: 'middle',
};

const AddAnnouncement = () => {
  const [announcement, setAnnouncement] = useState({
    title: '',
    content: '',
  });
  const [announcements, setAnnouncements] = useState([]);
  const [postedAnnouncement, setPostedAnnouncement] = useState(null);
  const [titleError, setTitleError] = useState('');
  const [contentError, setContentError] = useState('');
  const contentLimit = 300;

  useEffect(() => {
    const storedAnnouncements = localStorage.getItem('announcements');
    if (storedAnnouncements) {
      setAnnouncements(JSON.parse(storedAnnouncements));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('announcements', JSON.stringify(announcements));
  }, [announcements]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnnouncement((prevAnnouncement) => ({
      ...prevAnnouncement,
      [name]: value,
    }));
  };

  const handleAddAnnouncement = () => {
    if (announcement.title.trim() === '') {
      setTitleError('Title is required');
      return;
    } else {
      setTitleError('');
    }

    if (announcement.content.trim() === '') {
      setContentError('Content is required');
      return;
    } else {
      setContentError('');
    }

    // Truncate content if it exceeds the limit
    const truncatedContent =
      announcement.content.length > contentLimit
        ? announcement.content.slice(0, contentLimit)
        : announcement.content;

    const timestamp = new Date().toLocaleString();

    const newAnnouncement = {
      title: announcement.title,
      content: truncatedContent,
      timestamp: timestamp,
    };

    setAnnouncements((prevAnnouncements) => [...prevAnnouncements, newAnnouncement]);
    setAnnouncement({ title: '', content: '' });
    setPostedAnnouncement(newAnnouncement);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleAddAnnouncement();
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={4}
      >
        <Typography variant="h4" gutterBottom>
          <b>Add Announcement</b>
        </Typography>
        <TextField
          name="title"
          label="Title"
          value={announcement.title}
          onChange={handleInputChange}
          onKeyPress={handleEnterKey} // Trigger on Enter key press
          fullWidth
          margin="normal"
          error={titleError !== ''}
          helperText={titleError}
          required
        />
        <TextField
          name="content"
          label="Content"
          value={announcement.content}
          onChange={handleInputChange}
          onKeyPress={handleEnterKey} // Trigger on Enter key press
          fullWidth
          multiline
          rows={4}
          margin="normal"
          error={contentError !== ''}
          helperText={contentError}
          required
          inputProps={{ maxLength: contentLimit }} // Set max length for content
        />
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddAnnouncement}
          >
            Post Announcement
          </Button>
        </Box>
        {postedAnnouncement && (
          <Box mt={2} style={{ ...postedAnnouncementStyle }}>
            <div style={announcementContentStyle}>
              <Typography variant="subtitle1">
                <b>Title: </b>
                {postedAnnouncement.title}
              </Typography>
              <Typography variant="subtitle1">
                <b>Content: </b>
                {postedAnnouncement.content}
              </Typography>
              <Typography variant="subtitle2">
                Posted at: {postedAnnouncement.timestamp}
              </Typography>
            </div>
          </Box>
        )}
        <Box mt={4}>
          <Container
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <Typography variant="h6">
              <u>
                <b>All Announcements Posted:</b>
              </u>
            </Typography>
            {announcements.map((item, index) => (
              <Box key={index} mt={2} style={postedAnnouncementStyle}>
                <FaBullhorn style={announcementIconStyle} />
                <div style={announcementContentStyle}>
                  <Typography variant="subtitle1">
                    <b>Title: </b>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    <b>Content: </b>
                    {item.content}
                  </Typography>
                  <Typography variant="subtitle2">
                    Posted at: {item.timestamp}
                  </Typography>
                </div>
              </Box>
            ))}
          </Container>
        </Box>
      </Box>
    </Container>
  );
};

export default AddAnnouncement;
