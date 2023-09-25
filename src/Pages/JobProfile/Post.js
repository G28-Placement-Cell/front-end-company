import React from 'react';
import '../../CSS_files/Card.css';
import {Link} from 'react-router-dom';
export default function Post(props) {
  return (
    <div className="card">
        
        <h1>Company - {props.post.name}</h1>
        <h1>Type - {props.post.type}</h1>
        <h1>CPI - {props.post.cpi}</h1>
        <h1>Open for - {props.post.open_for}</h1>
        <h1>Reg. Opening date - {props.post.reg_open}</h1>
        <h1>Reg. closing date - {props.post.reg_close}</h1>
      <div className='postBody'>
        {
            <div>
                <a href={props.post.link} id="link">Your website</a>
            </div>
        }
        <Link to={`/moredetails/${props.post.id}`}><button className="editButton">See more details</button></Link>
      </div>
    </div>
  )
}
