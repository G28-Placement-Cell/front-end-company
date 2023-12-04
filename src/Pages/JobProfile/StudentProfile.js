import React from 'react';
import '../../CSS_files/studentprofile.css';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PendingStudent() {

  const { id } = useParams();
  console.log(id);

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  const [studentDetails, setStudentDetails] = useState({});//student object
  const [loading, setLoading] = useState(true);//loading state

  useEffect(() => {
    console.log(localStorage.getItem('token'));
    fetch(`https://back-end-production-3140.up.railway.app/api/admin/getStudent/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }).then((res) => res.json()).then((data) => {
      // console.log(data);
      setStudentDetails(data.student);
      setLoading(false);
    }).catch((err) => {
      // console.log(err);
      setLoading(false);
    });
  }, []);


  const navigate = useNavigate();
  const handleclick = async () => {
    // const studentid = localStorage.getItem('studentinfo.student_id');
    const fileid = studentDetails?.resume;
    if (!fileid) navigate('/*')
    // const res = await axios.get(`https://back-end-production-3140.up.railway.app/api/student/files/${fileid}`, {
    //   headers: {
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`
    //   },
    // });
    // console.log(res);
    else
      window.open(`https://back-end-production-3140.up.railway.app/api/student/files/resume/${fileid}`);
  }

  if (!studentDetails) return <>loading</>

  let url;
  if (studentDetails?.profile_pic === undefined) {
    url = 'https://bootdey.com/img/Content/avatar/avatar7.png';
  }
  else {
    const profilepic = studentDetails?.profile_pic;
    url = `https://back-end-production-3140.up.railway.app/api/student/files/profilepic/${profilepic}`
  }
  return (
    <div className="container pt-4" >
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={url} alt="Admin" className="rounded-circle" width={150} height={150} />
                  <div className="mt-3">
                    <h4 id='student_name'>{studentDetails?.name?.toUpperCase()}</h4>
                    <p id="student id" className="text-secondary mb-1">{studentDetails?.student_id}</p>
                    {/* <p id="verify" className="text-muted font-size-sm">Your profile is APPROVED </p> */}
                    {/* {
                      studentDetails?.verified ? <p id="verify" className="text-muted font-size-sm">APPROVED </p> : <p id="verify" className="text-muted font-size-sm">NOT APPROVED </p>
                    } */}
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3" style={{ width: '100%' }}>
              <ul className="list-group list-group-flush" style={{ width: '100%' }}>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Email</h6>
                  <span id="Email" className="text-secondary">{studentDetails?.email?.main}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">10th Percentage</h6>
                  <span id="10thPercentage" className="text-secondary">{studentDetails?.results?.tenth_percentage}%</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">12th Percentage</h6>
                  <span id="12thPercentage" className="text-secondary">{studentDetails?.results?.twelve_percentage}%</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">CPI</h6>
                  <span id="CPI" className="text-secondary">{studentDetails?.cpi}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Current BackLogs</h6>
                  <span id="CurrentBackLogs" className="text-secondary">{studentDetails?.academics?.current_backlogs}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Total BackLogs</h6>
                  <span id="TotalBackLogs" className="text-secondary">{studentDetails?.academics?.total_backlogs}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Branch</h6>
                  <span id="Branch" className="text-secondary">{studentDetails?.academics?.branch?.toUpperCase()}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Domain</h6>
                  <span id="Domain" className="text-secondary">{studentDetails?.domain?.toUpperCase()}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Registering For</h6>
                  <span id="RegisteringFor" className="text-secondary">{studentDetails?.registering_for?.toUpperCase()}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">Interested in Placement</h6>
                  <span id="InterestedinPlacement" className="text-secondary">Yes</span>
                </li>
                {/* <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Out of Placement Drive</h6>
                    <span className="text-secondary">Yes/NO</span>
                  </li> */}
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div id="FirstName" className="col-sm-9 text-secondary">
                    {studentDetails?.name?.toUpperCase()}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div id="LastName" className="col-sm-9 text-secondary">
                    {studentDetails?.surname?.toUpperCase()}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Alternate Email Address</h6>
                  </div>
                  <div id="AlternateEmailAddress" className="col-sm-9 text-secondary">
                    {studentDetails?.email?.alt}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Skype ID</h6>
                  </div>
                  <div id="SkypeID" className="col-sm-9 text-secondary">
                    {studentDetails?.skype_id}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Date Of Birth</h6>
                  </div>
                  <div id="DOB" className="col-sm-9 text-secondary">
                    {new Date(studentDetails?.dob).toLocaleString(undefined, options)}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Gender</h6>
                  </div>
                  <div id="Gender" className="col-sm-9 text-secondary">
                    {studentDetails?.gender?.toUpperCase()}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile Number</h6>
                  </div>
                  <div id="MobileNumber" className="col-sm-9 text-secondary">
                    {studentDetails?.phone_number?.main}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Alternate Mobile Number</h6>
                  </div>
                  <div id="AlternateMobileNumber" className="col-sm-9 text-secondary">
                    {studentDetails?.phone_number?.alt}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Father Name</h6>
                  </div>
                  <div id="FatherName" className="col-sm-9 text-secondary">
                    {studentDetails?.father_name?.toUpperCase()}
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mother Name</h6>
                  </div>
                  <div id="MotherName" className="col-sm-9 text-secondary">
                    {studentDetails?.mother_name?.toUpperCase()}
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Permanent Address</h6>
                  </div>
                  <div id="PermanentAddress" className="col-sm-9 text-secondary">
                    {studentDetails?.address?.per_address}
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Current Address</h6>
                  </div>
                  <div id="CurrentAddress" className="col-sm-9 text-secondary">
                    {studentDetails?.address?.cur_address}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <Button sx={{ width: 150, mr: 5, backgroundColor: "#2B2442" }} id="resume" required={true} component="label" onClick={handleclick} variant="contained" startIcon={<CloudUploadIcon />}>
                      Download Resume
                    </Button>
                    {/* <Button href='/updateresume' sx={{ width: 150, backgroundColor: "#2B2442" }} id="resume" required={true} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                      Upload Resume
                      <VisuallyHiddenInput type="file" />
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
    // <h1>hello</h1>
  )
}

export default PendingStudent;