import React from 'react';
import { Typography, Link, Grid, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import * as BsIcons from 'react-icons/bs';
import * as VSCIcons from 'react-icons/vsc';
import * as io5Icons from 'react-icons/io5';
import * as CgIcons from 'react-icons/cg';
import { purple } from '@mui/material/colors';

const contacts = [
  {
    name: 'Aarsh Bhavsar',
    phoneNumber: '+1 123-456-7890',
    linkedInProfile: 'https://www.linkedin.com',
    location:'https://www.google.com/maps/place/DA-IICT/@23.1885419,72.6263406,17z/data=!3m1!4b1!4m6!3m5!1s0x395c2a3c9618d2c5:0xc54de484f986b1fa!8m2!3d23.188537!4d72.6289155!16zL20vMDIzc2g3?entry=ttu'
  },
  {
    name: 'Aarsh Bhavsar',
    phoneNumber: '+1 987-654-3210',
    linkedInProfile: 'https://www.linkedin.com',
    location:'https://www.google.com/maps/place/DA-IICT/@23.1885419,72.6263406,17z/data=!3m1!4b1!4m6!3m5!1s0x395c2a3c9618d2c5:0xc54de484f986b1fa!8m2!3d23.188537!4d72.6289155!16zL20vMDIzc2g3?entry=ttu'
  },
  {
    name: 'Aarsh Bhavsar',
    phoneNumber: '+1 987-654-3210',
    linkedInProfile: 'https://www.linkedin.com',
    location:'https://www.google.com/maps/place/DA-IICT/@23.1885419,72.6263406,17z/data=!3m1!4b1!4m6!3m5!1s0x395c2a3c9618d2c5:0xc54de484f986b1fa!8m2!3d23.188537!4d72.6289155!16zL20vMDIzc2g3?entry=ttu'
  },
  {
    name: 'Aarsh Bhavsar',
    phoneNumber: '+1 987-654-3210',
    linkedInProfile: 'https://www.linkedin.com',
    location:'https://www.google.com/maps/place/DA-IICT/@23.1885419,72.6263406,17z/data=!3m1!4b1!4m6!3m5!1s0x395c2a3c9618d2c5:0xc54de484f986b1fa!8m2!3d23.188537!4d72.6289155!16zL20vMDIzc2g3?entry=ttu'
  },
  {
    name: 'Aarsh Bhavsar',
    phoneNumber: '+1 987-654-3210',
    linkedInProfile: 'https://www.linkedin.com',
    location:'https://www.google.com/maps/place/DA-IICT/@23.1885419,72.6263406,17z/data=!3m1!4b1!4m6!3m5!1s0x395c2a3c9618d2c5:0xc54de484f986b1fa!8m2!3d23.188537!4d72.6289155!16zL20vMDIzc2g3?entry=ttu'
  },
  {
    name:'Aarsh Bhavsar',
    phoneNumber: '+1 987-654-3210',
    linkedInProfile: 'https://www.linkedin.com',
    location:'https://www.google.com/maps/place/DA-IICT/@23.1885419,72.6263406,17z/data=!3m1!4b1!4m6!3m5!1s0x395c2a3c9618d2c5:0xc54de484f986b1fa!8m2!3d23.188537!4d72.6289155!16zL20vMDIzc2g3?entry=ttu'
  },
  {
    name: 'Aarsh Bhavsar',
    phoneNumber: '+1 987-654-3210',
    linkedInProfile: 'https://www.linkedin.com',
    location:'https://www.google.com/maps/place/DA-IICT/@23.1885419,72.6263406,17z/data=!3m1!4b1!4m6!3m5!1s0x395c2a3c9618d2c5:0xc54de484f986b1fa!8m2!3d23.188537!4d72.6289155!16zL20vMDIzc2g3?entry=ttu'
  },
  {
    name: 'Aarsh Bhavsar',
    phoneNumber: '+1 987-654-3210',
    linkedInProfile: 'https://www.linkedin.com',
    location:'https://www.google.com/maps/place/DA-IICT/@23.1885419,72.6263406,17z/data=!3m1!4b1!4m6!3m5!1s0x395c2a3c9618d2c5:0xc54de484f986b1fa!8m2!3d23.188537!4d72.6289155!16zL20vMDIzc2g3?entry=ttu'
  },
  {
    name: 'Aarsh Bhavsar',
    phoneNumber: '+1 987-654-3210',
    linkedInProfile: 'https://www.linkedin.com',
    location:'https://www.google.com/maps/place/DA-IICT/@23.1885419,72.6263406,17z/data=!3m1!4b1!4m6!3m5!1s0x395c2a3c9618d2c5:0xc54de484f986b1fa!8m2!3d23.188537!4d72.6289155!16zL20vMDIzc2g3?entry=ttu'
  },
  {
    name: 'Aarsh Bhavsar',
    phoneNumber: '+1 987-654-3210',
    linkedInProfile: 'https://www.linkedin.com',
    location:'https://www.google.com/maps/place/DA-IICT/@23.1885419,72.6263406,17z/data=!3m1!4b1!4m6!3m5!1s0x395c2a3c9618d2c5:0xc54de484f986b1fa!8m2!3d23.188537!4d72.6289155!16zL20vMDIzc2g3?entry=ttu'
  },
  {
    name: 'Aarsh Bhavsar',
    phoneNumber: '+1 987-654-3210',
    linkedInProfile: 'https://www.linkedin.com',
    location:'https://www.google.com/maps/place/DA-IICT/@23.1885419,72.6263406,17z/data=!3m1!4b1!4m6!3m5!1s0x395c2a3c9618d2c5:0xc54de484f986b1fa!8m2!3d23.188537!4d72.6289155!16zL20vMDIzc2g3?entry=ttu'
  },
  // Add more contacts as needed
];
export default function ContactUs() {
  return (
    <div style={{ padding: '60px' }}>
      <Grid container spacing={2}>
        {contacts.map((contact, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={10} style={{ padding: '20px',
              boxShadow:'20PX',
              borderRadius: '8px', }}>
              <Typography variant="h4" gutterBottom sx={{textAlign:"center"}}>
                <CgIcons.CgNametag></CgIcons.CgNametag> {contact.name}
              </Typography>
              
              <Typography>

              </Typography>
              <Typography variant="body1">
               
                <Link href={contact.linkedInProfile} target="_blank" rel="noopener noreferrer" sx={{textDecoration:"none"}}>
                <LinkedInIcon sx={{ fontSize: '20px', color: '#0077B5' ,marginTop:'4px'}}/>
                     {contact.name}
                </Link>
              </Typography>
              <Typography variant="body1">
              <Link href={contact.location} target="_blank" rel="noopener noreferrer" sx={{textDecoration:"none", marginTop:'4px'}} >
                  <io5Icons.IoLocationSharp></io5Icons.IoLocationSharp>
                  DAIICT
                </Link>
              </Typography>
            </Paper>
          </Grid>
        ))}
        
      </Grid>
    </div>
  );
}

