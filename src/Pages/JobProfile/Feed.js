import React from 'react'
import Post from './Post';
import '../../CSS_files/Card.css';

export default function Feed(props) {
  return (
    <div className="card-container">
     {props.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}