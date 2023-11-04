import React from 'react'
import {useParams,Link} from 'react-router-dom'
import {useEffect} from 'react';
import '../../CSS_files/EditPost.css';
import Footer from '../../Components/Footer';
export default function Editpost({posts,handleEdit,editName, seteditName,editBody,setEditBody,editType,seteditType,editCPI,seteditCPI,editOpenfor,seteditOpenfor,editRegopen,seteditRegopen,editRegclose,seteditRegclose,location,setLocation,CTC,setCTC,stipend,setStipend,companytype,setCompanytype}) {
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
            setLocation(post.location);
            setCompanytype(post.companytype);
            setCTC(CTC);
            setStipend(stipend);
        }
    },[post,seteditName,setEditBody,seteditType,seteditCPI,seteditOpenfor,seteditRegopen,seteditRegclose,setLocation,setCTC,setStipend,setCompanytype])
  return (
    <>
    <div className="NewPost">
    {editName && 
        <>
      <h2>Edit Profile</h2>
      <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="postName">Name :</label>
          <input
              id="postName"
              type="text"
              required
              value={editName}
              onChange={(e) => seteditName(e.target.value)}
          />
          <label htmlFor="postType">Type (Job/SI) :</label>
          <input
              id="postType"
              type="text"
              required
              value={editType}
              onChange={(e) => seteditType(e.target.value)}
          />
          <label htmlFor="location">Location :</label>
          <input
              id="location"
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="postCPI">CPI:</label>
          <input
              id="postCPI"
              type="text"
              required
              value={editCPI}
              onChange={(e) => seteditCPI(e.target.value)}
          />
          {/* <label htmlFor="postLink">Link to your Website:</label>
          <input
              id="postLink"
              type="text"
              required
              value={editLink}
              onChange={(e) => seteditLink(e.target.value)}
          /> */}
          <label htmlFor="postOpenfor">Open for:</label>
          <input
              id="postOpenfor"
              type="text"
              required
              value={editOpenfor}
              onChange={(e) => seteditOpenfor(e.target.value)}
          />
          <label htmlFor="companytype">Company Type :</label>
          <input
              id="companytype"
              type="text"
              required
              value={companytype}
              onChange={(e) => setCompanytype(e.target.value)}
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
          <label htmlFor="ctc">CTC :</label>
          <input
            id="ctc"
            type="text"
            required
            value={CTC}
            onChange={(e) => setCTC(e.target.value)}
          />
          <label htmlFor="stipend">Stipend :</label>
          <input
            id="stipend"
            type="text"
            required
            value={stipend}
            onChange={(e) => setStipend(e.target.value)}
          />
          <label htmlFor="postBody">Body:</label>
          <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
          />
                <button type="updatechanges" onClick={()=>handleEdit(post.id)}>Update the Changes</button>
                <Link to='/jobprofile'><button type="backtohomepage" onClick={()=>handleEdit(post.id)}>Back to Home Page</button></Link>
            </form>
            
            </>
    }
    </div>
    
    </>
  )
}
