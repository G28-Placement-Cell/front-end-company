import React, { useState } from 'react';
import '../../CSS_files/MainCP.css';
import Footer from '../../Components/Footer.js';
import { useNavigate } from 'react-router-dom';
import { useChange_passwordMutation } from '../../slices/company/companyApislice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLogoutMutation } from "../../slices/company/companyApislice.js";
import { logout } from "../../slices/company/authslice";
import { useDispatch } from "react-redux";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const [logoutapicall] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutapicall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const [change_password] = useChange_passwordMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // console.log('ok');
      const res = await change_password({ currentPassword, newPassword, confirmPassword }).unwrap();
      toast.success(res.message);
      logoutHandler();
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      console.log(err);
    }
  };

  return (
    <>
      <div style={{ minHeight: '74vh' }} className="maincp">
        <div className="change-password-container">
          <h2>Change Password</h2>
          <form onSubmit={submitHandler}>


            <div className="password-form">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type='submit' id="btn5">Change Password</button>
              {message && <p className="message">{message}</p>}
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}

    </>
  );
}

export default ChangePassword;
