import React from 'react';
import Feed from './Feed';
import {Link} from 'react-router-dom';
export default function See(props) {

  return (
    <>
    <div>
      <div className="Home">
      {props.isLoading && <p className="statusMsg">Loading posts...</p>}
      {props.posts.length ? (
        <Feed posts={props.posts} />
      ) : (
        <p style ={{marginTop:"2rem"}}>
            {!props.isLoading && <p>No posts to display.</p>}
        </p>
      )}

    </div>
    </div>
    
    </>
  )
}
