import React from 'react';
import { Button, Paper, Typography, Stack, InputBase, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Newpost() {

  const companyInfo = JSON.parse(localStorage.getItem('companyInfo'));
  const companyId = companyInfo && companyInfo._id;

  if (companyId) {
    // You have the company ID now. You can use it in your code.
    // console.log('Company ID:', companyId);
  } else {
    console.error('Company ID not found in local storage.');
  }

  const navigate = useNavigate();

  const [editName, seteditName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [editCPI, setEditCPI] = React.useState('');
  const [editOpenfor, setEditOpenfor] = React.useState('');
  const [companyType, setCompanyType] = React.useState('');
  const [offerType, setOfferType] = React.useState('');
  const [editRegopen, setEditRegopen] = React.useState('');
  const [editRegclose, seteditRegclose] = React.useState('');
  const [CTC, setCTC] = React.useState('');
  const [stipend, setStipend] = React.useState('');
  const [editBody, setEditBody] = React.useState('');

  const onSubmit = (e) => {
    // Parse and convert ctc to a number if it's a string
    e.preventDefault();
    const ctcValue = isNaN(CTC) ? CTC : parseFloat(CTC);

    const newPost = {
      company: companyId,
      company_name: editName,
      company_type: companyType,
      location: location,
      cpi_criteria: editCPI,
      offer_type: offerType,
      open_for: editOpenfor,
      registration_start_date: editRegopen,
      registration_end_date: editRegclose,
      ctc: ctcValue, // Use ctcValue instead of CTC
      stipend: stipend,
      job_description: editBody,
    };

    // Send a POST request to your backend using the fetch function
    fetch('https://back-end-production-3140.up.railway.app/api/jobprofile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('POST request successful', data);
        navigate('/jobprofile');
      })
      .catch((error) => {
        // console.log('POST request failed', error);
        console.error('Error sending POST request', error);
      });
  };

  return (
    <form onSubmit={onSubmit}>
    <div style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      padding: "5vh 5vw",
    }}>
      <Paper sx={{ py: 1, px: 3 }} className="container">
        <Typography variant="h4" sx={{ textAlign: 'left', mt: 2, mb: 3 }}>Add a new Post</Typography>
          <Stack direction="column" spacing={2} sx={{ pb: 2 }}>
            <Typography variant="body1" sx={{ textAlign: 'left' }}>Name</Typography>
            <InputBase
              placeholder="Name"
              value={editName}
              onChange={(e) => seteditName(e.target.value)}
              inputProps={{ 'aria-label': 'Name' }}
              required
            />

            <Typography variant="body1" sx={{ textAlign: 'left' }}>Offer Type</Typography>
            <Select
              value={offerType}
              onChange={(e) => setOfferType(e.target.value)}
              required
            >
              <MenuItem value="si">SI</MenuItem>
              <MenuItem value="job">Job</MenuItem>
            </Select>

            <Typography variant="body1" sx={{ textAlign: 'left' }}>Location</Typography>
            <InputBase
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              inputProps={{ 'aria-label': 'Location' }}
              required
            />

            <Typography variant="body1" sx={{ textAlign: 'left' }}>Open for</Typography>
            <InputBase
              placeholder="Open for"
              value={editOpenfor}
              onChange={(e) => setEditOpenfor(e.target.value)}
              inputProps={{ 'aria-label': 'Open for' }}
              required
            />

            <Typography variant="body1" sx={{ textAlign: 'left' }}>CPI Criteria</Typography>
            <InputBase
              placeholder="CPI Criteria"
              value={editCPI}
              onChange={(e) => setEditCPI(e.target.value)}
              inputProps={{ 'aria-label': 'CPI Criteria' }}
              required
            />

            <Typography variant="body1" sx={{ textAlign: 'left' }}>Company Type</Typography>
            <InputBase
              placeholder="Company Type"
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
              inputProps={{ 'aria-label': 'Company Type' }}
              required
            />

            <Typography variant="body1" sx={{ textAlign: 'left' }}>Registration Starts from</Typography>
            <InputBase
              placeholder="Registration Starts from"
              type="datetime-local"
              value={editRegopen}
              onChange={(e) => setEditRegopen(e.target.value)}
              inputProps={{ 'aria-label': 'Registration Starts from' }}
              required
            />

            <Typography variant="body1" sx={{ textAlign: 'left' }}>Registration Closes at</Typography>
            <InputBase
              placeholder="Registration Closes at"
              type="datetime-local"
              value={editRegclose}
              onChange={(e) => seteditRegclose(e.target.value)}
              inputProps={{ 'aria-label': 'Registration Closes at' }}
              required
            />

            <Typography variant="body1" sx={{ textAlign: 'left' }}>CTC (in LPA)</Typography>
            <InputBase
              placeholder="CTC"
              value={CTC}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (!isNaN(inputValue)) {
                  setCTC(inputValue);
                }
              }}
              inputProps={{ 'aria-label': 'CTC' }}
              type="number"
              required
            />

            <Typography variant="body1" sx={{ textAlign: 'left' }}>Stipend</Typography>
            <InputBase
              placeholder="Stipend"
              value={stipend}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (!isNaN(inputValue)) {
                  setStipend(inputValue);
                }
              }}
              inputProps={{ 'aria-label': 'Stipend' }}
              type="number"
              required
            />

            <Typography variant="body1" sx={{ textAlign: 'left' }}>Description</Typography>
            <InputBase
              placeholder="Description"
              multiline
              rows={1}
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              inputProps={{ 'aria-label': 'Description' }}
              required
            />
            <Button variant="contained" type="submit">
              Add the new Post
            </Button>
          </Stack>
      </Paper>
    </div>
        </form>
  );
}
