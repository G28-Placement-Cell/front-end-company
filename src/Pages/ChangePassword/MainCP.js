import React, { useState } from 'react';
import '../../CSS_files/MainCP.css'; 

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePassword = () => {
    if(currentPassword !== '')
    {
        if (newPassword === confirmPassword) {
            if (newPassword !== '' && confirmPassword !== '') {
              // Passwords match, you can add your backend logic here to change the password
              // For this example, we'll simulate a success message
              setMessage('Password changed successfully.');
            } else {
              setMessage('Please enter the new password.');
            }
          } else {
            setMessage('Passwords do not match. Please try again.');
          }
    }
    else
    {
        setMessage('Please enter the password to be changed.')
    }
  };
  return (
    <div className="maincp">
        <div className="change-password-container">
      <h2>Change Password</h2>
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
        <button onClick={handleChangePassword}>Change Password</button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
    </div>
    
  );
}

export default ChangePassword;
