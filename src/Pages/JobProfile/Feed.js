// import React from 'react'
// import Post from './Post';
// import '../../CSS_files/Card.css';
// import { Container, Paper } from '@mui/material';

// export default function Feed(props) {
//   return (
//     <Paper className="card-container1">
//      {props.posts.map(post => (
//         <Post key={post.id} post={post} />
//       ))}
//     </Paper>
//   )
// }

import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import { PostAdd as PostAddIcon, Add as AddIcon } from "@mui/icons-material";
import "../../CSS_files/AnnouncementSection.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Feeds = ({ title }) => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      name: "Google",
      type: "Job",
      location: "Banglore",
      cpi: "7",
      open_for: "btech-ict,btech-cs",
      company_type: "IT",
      reg_open: "12-20-2023 06:00",
      reg_close: "12-20-2023 08:00",
      ctc: "35L",
      stipend: "20L",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.",
    },
    {
      id: 2,
      name: "Google",
      type: "Job",
      location: "Banglore",
      cpi: "No criteria",
      link: "https://www.google.com/",
      open_for: "btech-ict,btech-cs",
      company_type: "IT",
      reg_open: "12-20-2023 06:00",
      reg_close: "12-20-2023 08:00",
      ctc: "35L",
      stipend: "20L",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.",
    },
    {
      id: 3,
      name: "Google",
      type: "Job",
      location: "Banglore",
      cpi: "7",
      link: "https://www.google.com/",
      open_for: "btech-ict,btech-cs",
      company_type: "IT",
      reg_open: "12-20-2023 06:00",
      reg_close: "12-20-2023 08:00",
      ctc: "35L",
      stipend: "20L",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.",
    },
    {
      id: 4,
      name: "microsoft",
      type: "job",
      location: "Banglore",
      cpi: "8.7",
      open_for: "eee",
      company_type: "IT",
      reg_open: "vgvgrfrf",
      reg_close: "uyguiy",
      ctc: "35L",
      stipend: "20L",
      body: "vinit",
    },
  ]);
  const [announcementText, setAnnouncementText] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch("http://localhost:8000/api/announcements/admin/company", {
      method: "GET",
      headers: {
        "content-type": "application/json",
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

  const handleAnnouncementChange = (e) => {
    setAnnouncementText(e.target.value);
  };

  const handleSubmitAnnouncement = () => {
    if (announcementText.trim() !== "") {
      const newAnnouncement = {
        id: new Date().getTime(),
        text: announcementText,
        timestamp: new Date().toLocaleString(),
      };

      setAnnouncements([...announcements, newAnnouncement]);
      setAnnouncementText("");
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
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        padding: "5vh 5vw",
      }}
    >
      <Paper sx={{ py: 1, px: 3 }} className="container1">
        <Typography variant="h5" sx={{ pt: 1, pb: 1 }}>
          Current Job Profiles {title}:
        </Typography>
        {loading ? (
          <p>Loading...</p>
        ) : announcements && announcements.length > 0 ? (
          <List className="list1">
            {announcements
              .slice() // Create a shallow copy of the array
              .reverse() // Reverse the order of announcements
              .map((announcement, index) => (
                <ListItem key={index} className="item1">
                  <ListItemText
                    primary={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {/* <Typography>Name : {announcement.name}</Typography> */}
                      </div>
                    }
                    secondary={
                      <div>
                        {/* <Typography>
                          Type (Job/SI) - {announcement.type}
                        </Typography>
                        <Typography>
                          Location : {announcement.location}
                        </Typography>
                        <Typography>
                          CPI : {announcement.cpi}
                        </Typography>
                        <Typography>
                          Open for : {announcement.open_for}
                        </Typography>
                        <Typography>
                          Company type : {announcement.company_type}
                        </Typography>
                        <Typography>
                          Registration starts from : {announcement.reg_open}
                        </Typography>
                        <Typography>
                          Registration closes at : {announcement.reg_close}
                        </Typography>
                        <Typography>CTC : {announcement.ctc}</Typography>
                        <Typography>
                          Stipend : {announcement.stipend}
                        </Typography>
                        <Typography>
                          Description : {announcement.body}
                        </Typography> */}
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Company Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {announcement.name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Type (Job/SI)</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {announcement.type}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Location</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {announcement.location}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">CPI Criteria</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {announcement.cpi}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Open For</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {announcement.open_for}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Company Type</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {announcement.company_type}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Registration Starts from</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {announcement.reg_open}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Registration Closes at</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {announcement.reg_close}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">CTC</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {announcement.ctc}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Stipend</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {announcement.stipend}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Description</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {announcement.body}
                    </div>
                  </div>
                  <hr />
                </div>
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontStyle: "italic",
                            textAlign: "right",
                          }}
                          color="text.secondary"
                        >
                          {new Date(announcement.reg_open).toLocaleString()}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontStyle: "italic",
                            textAlign: "right",
                          }}
                          color="text.secondary"
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: 'flex-end',
                              alignItems: "flex-end",
                              marginTop:'10px'
                              // gap:'10px'
                            }}
                          >
                            <button style={{backgroundColor:'#2B2442', width:'200px', borderRadius:'5px'}}>
                              See registered students
                            </button>
                            <Link to={`/editpost/${announcement.id}`}><button style={{backgroundColor:'#2B2442', width:'200px', marginLeft:'15px', borderRadius:'5px'}}>Edit the profile</button></Link>
                          </div>
                        </Typography>
                      </div>
                    }
                    secondaryTypographyProps={{ variant: "body2" }} // Customize secondary text style
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
              No data to display
            </Typography>
          </div>
        )}
      </Paper>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 60, right: 20 }}
        onClick={() => navigate("/newpost")}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Feeds;
