import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';

function ComanyProfile() {

  const [company, setCompany] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    console.log(localStorage.getItem('token'));
    fetch('http://localhost:8000/api/company/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => res.json()).then((data) => {
      console.log(data);
      setCompany(data.company);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, [])

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  if (loading) return (<div>Loading...</div>);

  return (
    <div style={{ width: '100%', backgroundColor:'#e4eaf5' }}>
      <div className="container" style={{ width: '100%' }}>
        <div className="main-body" style={{ width: '100%' }}>
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3" style={{ alignItems: 'flex-start' }}>
              <div className="card mt-0">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                    <div className="mt-3">
                      <h4>Company Logo</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Company Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {company.company_name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">HR Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {company.hr_name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Contact No</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {company.contact_no}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email ID</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {company.email_id}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Website</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {company.website}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Company Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {company.company_address}
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComanyProfile;