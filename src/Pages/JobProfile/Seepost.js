import React from "react";
import Feed from "./Feed";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function See(props) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
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
      // console.log(data.comp.isVerified)
      if (data.comp.isVerified == false) {
        // alert("Your profile is not verified yet");
        navigate('/nv');
      }
      setLoading(false);
    }).catch((err) => {
      // console.log(err);
      setLoading(false);
    });
  }, [])

  return (
    <>
      <div>
        <div className="Home">
          <Feed />
        </div>
      </div>
    </>
  );
}
