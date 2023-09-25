import React from 'react';
import '../../CSS_files/Details.css';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
export default function Details({ posts }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <div className="container">
      <div className="box">
         <h1>Company - {post.name}</h1> 
         <h1>Type - {post.type}</h1> 
        <h1>CPI - {post.cpi}</h1>
        <h1>Description - {post.body}</h1>
        <h1>Open for - {post.open_for}</h1>
        <h1>Reg. Opening date - {post.reg_open}</h1>
        <h1>Reg. closing date - {post.reg_close}</h1>
        <div className="buttons">
          <Link to={`/editpost/${post.id}`}><button className="edit-button">Edit the profile</button></Link>
          <button className="delete-button">See registered Students</button>
        </div>
      </div>
    </div>
  );
}
