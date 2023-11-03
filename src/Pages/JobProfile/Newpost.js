import React from 'react'
import '../../CSS_files/EditPost.css';
import {Link} from 'react-router-dom';
export default function Newpost({handleSubmit,editName, seteditName,editBody,setEditBody,editType,seteditType,editCPI,seteditCPI,editLink,seteditLink,editOpenfor,seteditOpenfor,editRegopen,seteditRegopen,editRegclose,seteditRegclose}) 
{
  return (
    <>
    <div className="NewPost">
      <h2>New Profile</h2>
      <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="postName">Name:</label>
          <input
              id="postName"
              type="text"
              required
              value={editName}
              onChange={(e) => seteditName(e.target.value)}
          />
          <label htmlFor="postType">Type:</label>
          <input
              id="postType"
              type="text"
              required
              value={editType}
              onChange={(e) => seteditType(e.target.value)}
          />
          <label htmlFor="postCPI">CPI:</label>
          <input
              id="postCPI"
              type="text"
              required
              value={editCPI}
              onChange={(e) => seteditCPI(e.target.value)}
          />
          <label htmlFor="postLink">Link to your Website:</label>
          <input
              id="postLink"
              type="text"
              required
              value={editLink}
              onChange={(e) => seteditLink(e.target.value)}
          />
          <label htmlFor="postOpenfor">Open for:</label>
          <input
              id="postOpenfor"
              type="text"
              required
              value={editOpenfor}
              onChange={(e) => seteditOpenfor(e.target.value)}
          />
          <label htmlFor="postRegopen">Registration opens from:</label>
          <input
              id="postRegopen"
              type="text"
              required
              value={editRegopen}
              onChange={(e) => seteditRegopen(e.target.value)}
          />
          <br />
          <label htmlFor="postRegclose">Registration closes at:</label>
          <input
            id="postRegclose"
            type="text"
            required
            value={editRegclose}
            onChange={(e) => seteditRegclose(e.target.value)}
          />
          <label htmlFor="postBody">Body:</label>
          <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
          />
          <button type="updatechanges" onClick={handleSubmit}>Add the new Post</button>
          <Link to='/seepost'><button type="backtohomepage">Back to Home Page</button></Link>
        </form>
    </div>
    </>
  )
}
