import React from 'react';
import { CssBaseline } from '@mui/material';

function createData(company_name, hr_name, contact_no, email_id, website, company_address) {
  return { company_name, hr_name, contact_no, email_id, website, company_address };
}

function ComanyProfile() {

  const rows = [createData( 'google', 'raju', '911', '@gmail.com', 'google.com', 'delhi')
  ]

  return (
    <div style={{ width:'100%'}}>
      {/* <CssBaseline/> */}
        {rows.map((row) => (
        <div className="container" style={{width:'100%'}}>
        <div className="main-body" style={{ width:'100%'}}>
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3" style={{alignItems:'flex-start'}}>
              <div className="card mt-0">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center" style={{justifyContent:'center', alignItems:'center'}}>
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
                      {row.company_name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">HR Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {row.hr_name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Contact No</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {row.contact_no}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email ID</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {row.email_id}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Website</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     {row.website}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Company Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {row.company_address}
                    </div>
                  </div>
                  
                  <hr />
                 

                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
        ))}
    </div>
        

  );

  
    
}

export default ComanyProfile;