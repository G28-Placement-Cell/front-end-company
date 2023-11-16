import React from 'react'
import { useState } from 'react';
import { Button, InputBase, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import '../../CSS_files/EditPost.css';
import Footer from '../../Components/Footer';
export default function Editpost() {

  const { id } = useParams();
  const jobId = id;
  // console.log(jobId, 'job')
  const companyInfo = JSON.parse(localStorage.getItem('companyInfo'));
  const companyId = companyInfo && companyInfo._id;

  if (companyId) {
    // You have the company ID now. You can use it in your code.
    // console.log('Company ID:', companyId);
  } else {
    console.error('Company ID not found in local storage.');
  }

  const navigate = useNavigate();

  const [editName, seteditName] = useState('');
  const [location, setLocation] = useState('');
  const [editCPI, setEditCPI] = useState('');
  const [editOpenfor, setEditOpenfor] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [offerType, setOfferType] = useState('');
  const [editRegopen, setEditRegopen] = useState();
  const [editRegclose, seteditRegclose] = useState();
  const [CTC, setCTC] = useState('');
  const [stipend, setStipend] = useState('');
  const [editBody, setEditBody] = useState('');

  useEffect(() => {
    // Fetch existing data for the job profile using jobId
    fetch(`https://back-end-production-ee2f.up.railway.app/api/jobprofile/${jobId}`)
      .then(response => response.json())
      .then(data => {
        // Set initial state with existing data
        // console.log(data);
        seteditName(data.company_name);
        setLocation(data.location);
        setEditCPI(data.cpi_criteria);
        setEditOpenfor(data.open_for);
        setCompanyType(data.company_type);
        setOfferType(data.offer_type);

        // Convert date strings to a format compatible with datetime-local
        setEditRegopen(new Date(data.registration_start_date).toISOString().slice(0, 16));
        seteditRegclose(new Date(data.registration_end_date).toISOString().slice(0, 16));

        setCTC(data.ctc);
        setStipend(data.stipend);
        setEditBody(data.job_description);
      })
      .catch(error => console.error('Error fetching job profile data:', error));
  }, [jobId]);

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`https://back-end-production-ee2f.up.railway.app/api/jobprofile/${jobId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({
        company_name: editName,
        location: location,
        cpi_criteria: editCPI,
        open_for: editOpenfor,
        company_type: companyType,
        offer_type: offerType,
        registration_start_date: editRegopen,
        registration_end_date: editRegclose,
        ctc: CTC,
        stipend: stipend,
        job_description: editBody,
      }),
    })
      .then(response => {
        if (response.ok) {
          navigate('/jobprofile');
        } else {
          console.error('Error updating job profile:', response.status);
        }
      })
      .catch(error => console.error('Error updating job profile:', error));
  }

  return (
    <div style={{ position: 'relative', padding: '20px' }}>
      <Paper sx={{ py: 1, px: 3 }} className="container">
        <Typography variant="h4" sx={{ textAlign: 'left', mt: 2, mb: 3 }}>Update an existing Job Profile</Typography>
        <form onSubmit={handleSubmit}>
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
              Update Job Profile
            </Button>
          </Stack>
        </form>
      </Paper>
    </div>
  );
}
