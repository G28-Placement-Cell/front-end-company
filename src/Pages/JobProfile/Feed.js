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
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Fab,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import "../../CSS_files/AnnouncementSection.css";
import { Link, useNavigate } from "react-router-dom";

const Feeds = ({ title }) => {
  const companyInfoJSON = localStorage.getItem('companyInfo');
  const companyInfo = JSON.parse(companyInfoJSON);
  const _id = companyInfo?._id;

  // Now, you can use '_id' in your code
  console.log(_id);


  const [jobProfiles, setJobProfiles] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch(`http://localhost:8000/api/jobprofile/company/${_id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setJobProfiles(data.jobProfiles);
        console.log(jobProfiles)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Simulate loading for 2 seconds (you should replace this with your actual data fetching code)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  const navigate = useNavigate();

  const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };


  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        padding: "5vh 5vw",
      }}
    >
      <Paper sx={{ py: 1, px: 3 }} className="container">
        <Typography variant="h5" sx={{ pt: 1, pb: 1 }}>
          Current Job Profiles {title}:
        </Typography>
        {loading ? (
          <p>Loading...</p>
        ) : jobProfiles && jobProfiles.length > 0 ? (
          <List className="list1">
            {jobProfiles
              .slice() // Create a shallow copy of the array
              .reverse() // Reverse the order of announcements
              .map((jobProfile, index) => (
                <ListItem key={index} className="item1">
                  <ListItemText
                    primary={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {/* <Typography>Name : {jobProfile.name}</Typography> */}
                      </div>
                    }
                    secondary={
                      <div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Company Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.company_name}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Type (Job/SI)</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.offer_type}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Location</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.location}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">CPI Criteria</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.cpi_criteria}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Open For</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.open_for}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Company Type</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.company_type}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Registration Starts from</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {new Date(jobProfile.registration_start_date).toLocaleDateString('en-GB', options)}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Registration Closes at</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {new Date(jobProfile.registration_end_date).toLocaleDateString('en-GB', options)}
                            </div>
                          </div>

                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">CTC</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.ctc}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Stipend</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.stipend}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Description</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.job_description}
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
                          {new Date(jobProfile.registration_start_date).toLocaleString()}
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
                              marginTop: '10px'
                              // gap:'10px'
                            }}
                          >
                            {/* <Link to={`/seereg`}> */}
                            <button onClick={() => navigate('/seereg')} style={{ backgroundColor: '#2B2442', width: '200px', borderRadius: '5px' }}>
                              See registered students
                            </button>

                            {/* </Link> */}


                            {/* <Link to={`/editpost/${jobProfile.id}`}> */}
                            <button onClick={() => navigate(`/editpost/${jobProfile._id}`)} style={{ backgroundColor: '#2B2442', width: '200px', marginLeft: '15px', borderRadius: '5px' }}>
                              Edit the profile
                            </button>
                            {/* </Link> */}
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
