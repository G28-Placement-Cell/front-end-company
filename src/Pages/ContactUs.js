// src/components/ContactUs.js

import React from 'react';
import { Card, CardContent, Typography, Grid, Link, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { FaPhone } from 'react-icons/fa';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  maxWidth: '300px',
  width: '100%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  minHeight: '300px',
  overflowY: 'auto',
};

const avatarStyle = {
  width: '100px',
  height: '100px',
  marginBottom: '-12px',
  backgroundColor:"#2b2442"
};

const linkedinIconStyle = {
  color: '#0A66C2',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '40px',
  fontWeight: 'bold',
  margin: '10px',

};

const ContactUs = () => {
  const contactInfo = [
    {
      name: 'Aarsh Bhavsar',
      phone: '123-456-7890',
      linkedin: 'https://www.linkedin.com',
      image: 'A',
      email:"#/contactus"
    },
    {
      name: 'Dhruv Lad',
      phone: '123-456-7890',
      linkedin: 'https://www.linkedin.com',
      image: 'D',
      email:"#/contactus"
    },
    {
      name: 'Maulik Thakkar',
      phone: '123-456-7890',
      linkedin: 'https://www.linkedin.com',
      image: 'M',
      email:"#/contactus"
    },
    {
      name: 'Vinit Mehta',
      phone: '123-456-7890',
      linkedin: 'https://www.linkedin.com',
      image: 'V',
      email:"#/contactus"
    },
    {
      name: 'Shashank Upadhyay',
      phone: '123-456-7890',
      linkedin: 'https://www.linkedin.com',
      image: 'S',
      email:"#/contactus"
    },
    {
      name: 'Sahil Lakdawala',
      phone: '123-456-7890',
      linkedin: 'https://www.linkedin.com',
      image: 'S',
      email:"#/contactus"
    },
    {
      name: 'Aum Patel',
      phone: '123-456-7890',
      linkedin: 'https://www.linkedin.com',
      image: 'A',
      email:"#/contactus"
    },
    {
      name: 'Divy Patel',
      phone: '123-456-7890',
      linkedin: 'https://www.linkedin.com',
      image: 'D',
      email:"#/contactus"
    },
    {
      name: 'Shivan Kacha',
      phone: '123-456-7890',
      linkedin: 'https://www.linkedin.com',
      image: 'S',
      email:"#/contactus"
    },
    {
      name: 'Vedant Shah',
      phone: '123-456-7890',
      linkedin: 'https://www.linkedin.com',
      image: 'V',
      email:"#/contactus"
    },
    {
      name: 'Nishith Parekh',
      phone: '123-456-7890',
      linkedin: 'https://www.linkedin.com',
      image: 'N',
      email:"#/contactus"
    },

    // Add more contact cards as needed
  ];

  return (
    <>
    <Typography variant="h3" style={{ margin: '0',fontWeight:"bold",textAlign:"center" }}>
          Contact Us
        </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    
    <main style={{ flexGrow: 1 }}>
      <div>
        <Grid container justifyContent="flex-start" spacing={2} style={{ paddingLeft: '100px',paddingRight:'100px' }}>
          {contactInfo.map((contact, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={cardStyle}>
              <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                      <Avatar src={contact.image} alt={contact.name} style={avatarStyle} />
              </Link>
                
                <CardContent style={{ flex: 1 }}>
                  <Typography variant="h6" align="center">
                    {contact.name}
                  </Typography>
                  <Typography variant="body1" align="center">
                    <span style={{ verticalAlign: 'middle', marginRight: '8px', fontSize: '1.2em' }}>
                      <FaPhone />
                    </span>
                    {contact.phone}
                  </Typography>
                  <Typography variant="body1" align="center">
                    {' '}
                    <Link href={contact.email} rel="noopener noreferrer" style={{textDecoration:"none"}}>
                      <EmailIcon style={linkedinIconStyle} />
                      {contact.name}'s E-Mail
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  </div>
    </>
    
  );
};

export default ContactUs;
