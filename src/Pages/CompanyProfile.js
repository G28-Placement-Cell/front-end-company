import React, { useEffect } from 'react';
import { Paper } from '@mui/material';

function ComanyProfile() {

    const [company, setCompany] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        // console.log(localStorage.getItem('token'));
        fetch('https://back-end-production-ee2f.up.railway.app/api/company/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => res.json()).then((data) => {
            // console.log(data);
            setCompany(data.comp);
            setLoading(false);
        }).catch((err) => {
            // console.log(err);
            setLoading(false);
        });
    }, [])

    if (loading) return (<div>Loading...</div>);

    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                padding: "5vh 5vw",

            }}
        >
            <Paper sx={{ py: 1, px: 3, width: '90vw' }} className="container1">
                <div className="card-body">

                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center" style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                            <div className="mt-3">
                                <h4>{company?.companyname}</h4>
                                {
                                    company?.verified ? <p id="verify" className="text-muted font-size-sm">Company profile is APPROVED </p> : <p id="verify" className="text-muted font-size-sm">Company profile is NOT APPROVED </p>
                                }
                            </div>
                        </div>
                    </div>
                    <hr />
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Location</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {company?.address}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">HR Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {company?.hrname}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Contact</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {company?.contact}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {company?.email}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Website</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {company?.website}
                        </div>
                    </div>
                    <hr />
                </div>
            </Paper>
        </div>
    );
}

export default ComanyProfile;