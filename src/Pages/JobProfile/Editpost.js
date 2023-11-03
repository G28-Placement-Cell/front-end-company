import React from 'react'
import {useParams,Link} from 'react-router-dom'
import {useEffect} from 'react';
import '../../CSS_files/EditPost.css';
import Footer from '../../Components/Footer';
export default function Editpost({posts,handleEdit,editName, seteditName,editBody,setEditBody,editType,seteditType,editCPI,seteditCPI,editOpenfor,seteditOpenfor,editRegopen,seteditRegopen,editRegclose,seteditRegclose}) {
  const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    useEffect(() =>{
        if(post)
        {
            seteditName(post.name);
            setEditBody(post.body);
            seteditType(post.type);
            seteditCPI(post.cpi);
            seteditOpenfor(post.open_for);
            seteditRegopen(post.reg_open);
            seteditRegclose(post.reg_close);
        }
    },[post,seteditName,setEditBody,seteditType,seteditCPI,seteditOpenfor,seteditRegopen,seteditRegclose])
  return (
    <>
    <div className="NewPost">
    {editName && 
        <>
      <h2>Edit Profile</h2>
      <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="postName">Name:</label>
                <input
                    id="postTitle"
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
                <button type="updatechanges" onClick={()=>handleEdit(post.id)}>Update the Changes</button>
                <Link to='/seepost'><button type="backtohomepage" onClick={()=>handleEdit(post.id)}>Back to Home Page</button></Link>
            </form>
            
            </>
    }
    </div>
    <Footer />
    </>
  )
}
