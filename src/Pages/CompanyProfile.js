import React, { useEffect } from 'react';

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
      setCompany(data.comp);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }, [])

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
                      {company.companyname}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">HR Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {company.hrname}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Contact No</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {company.contact}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email ID</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {company.email}
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
                      {company.address}
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