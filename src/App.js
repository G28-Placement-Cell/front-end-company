// import './CSS_files/App.css';
// import Navbar from './Pages/Navbar';
import { Route, Switch, HashRouter as Router, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from './api/posts.js';
import JobProfile from './Pages/JobProfile/JobProfile.js';
import Announcement from './Pages/Announcement.js';
import ChangePassword from './Pages/ChangePassword/ChangePassword.js';
import AboutUs from './Pages/AboutUs.js';
import Missing from './Pages/Missing.js';
import ContactUs from './Pages/ContactUs.js';
import CompanyProfile from './Pages/CompanyProfile.js';
import Header from './Pages/ChangePassword/Header'
import FooterC from './Pages/ChangePassword/Footer'
import SeePost from './Pages/JobProfile/Seepost.js';
import NewPost from './Pages/JobProfile/Newpost.js';
import EditPost from './Pages/JobProfile/Editpost.js';
import Details from './Pages/JobProfile/Details.js';
import FooterJ from './Pages/JobProfile/Footer';
import { Errored } from './Pages/Errored.js';
import { CompanyLogin } from "./Pages/CompanyLogin.js";
import { CompanyRegister } from "./Pages/CompanyRegister.js"
function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editName, seteditName] = useState('');
  const [editBody, setEditBody] = useState('');
  const [editType, seteditType] = useState('');
  const [editCPI, seteditCPI] = useState('');
  const [editOpenfor, seteditOpenfor] = useState('');
  const [editRegopen, seteditRegopen] = useState('');
  const [editRegclose, seteditRegclose] = useState('');
  const [editLink, seteditLink] = useState('');
  const history = useHistory();

  const handleEdit = async (id) => {

    const updatedPost = { id, name: editName, type: editType, cpi: editCPI, open_for: editOpenfor, reg_open: editRegopen, reg_close: editRegclose, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? { ...updatedPost } : post));
      seteditName('');
      setEditBody('');
      seteditType('');
      seteditCPI('');
      seteditOpenfor('');
      seteditRegopen('');
      seteditRegclose('');
      history.push('/');
    }
    catch (err) {
      console.log(`Error : ${err.message}`);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newPost = { id, name: editName, type: editType, cpi: editCPI, link: editLink, open_for: editOpenfor, reg_open: editRegopen, reg_close: editRegclose, body: editBody };
    const response = await api.post('./posts', newPost);
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    seteditName('');
    setEditBody('');
    seteditType('');
    seteditCPI('');
    seteditOpenfor('');
    seteditRegopen('');
    seteditRegclose('');
    seteditLink('');
    history.push('/');
  }

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.name).toLowerCase()).includes(search.toLowerCase())
      || ((post.name).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filteredResults);
  }, [posts, search])

  useEffect(() => {
    setIsLoading(true);
    async function fetchPosts() {
      try {
        console.log("hii");
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        else {
          console.log(`Error : ${err.message}`);
        }
      }
      finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      fetchPosts();
    }, 2000);
  }, []);

  return (
    <div className="main">
      <Router>
        <Header />
        <Switch>

          <Route exact path='/'>
            {/* <Navbar/> */}

            <FooterJ />
          </Route>
          <Route exact path='/login'>
            <CompanyLogin></CompanyLogin>
          </Route>
          <Route exact path='/register'>
            <CompanyRegister></CompanyRegister>
          </Route>
          <Route exact path='/companyprofile'>
            <CompanyProfile />
          </Route>
          <Route exact path='/jobprofile'>
            <JobProfile />
          </Route>
          <Route exact path='/announcement'>
            <Announcement />
          </Route>
          <Route exact path='/changepassword'>
            <ChangePassword />
          </Route>
          <Route exact path='/aboutus'>
            <AboutUs />
          </Route>
          <Route exact path='/logout'>
            {/* <Navbar/> */}
          </Route>
          <Route exact path='/contactus'>
            <ContactUs />
          </Route>
          <Route exact path='/seepost'>
            <SeePost posts={searchResults} isLoading={isLoading} />
          </Route>
          <Route exact path='/newpost'>
            <NewPost handleSubmit={handleSubmit}
              editName={editName} seteditName={seteditName}
              editBody={editBody} setEditBody={setEditBody}
              editType={editType} seteditType={seteditType}
              editCPI={editCPI} seteditCPI={seteditCPI}
              editLink={editLink} seteditLink={seteditLink}
              editOpenfor={editOpenfor} seteditOpenfor={seteditOpenfor}
              editRegopen={editRegopen} seteditRegopen={seteditRegopen}
              editRegclose={editRegclose} seteditRegclose={seteditRegclose}
            />
          </Route>
          <Route exact path='/moredetails/:id'>
            <Details posts={posts} />
          </Route>
          <Route exact path='/editpost/:id'>
            <EditPost posts={posts} handleEdit={handleEdit}
              editName={editName} seteditName={seteditName}
              editBody={editBody} setEditBody={setEditBody}
              editType={editType} seteditType={seteditType}
              editCPI={editCPI} seteditCPI={seteditCPI}
              editOpenfor={editOpenfor} seteditOpenfor={seteditOpenfor}
              editRegopen={editRegopen} seteditRegopen={seteditRegopen}
              editRegclose={editRegclose} seteditRegclose={seteditRegclose} />
          </Route>
          <Route path="*">
            <Errored />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>

    </div>
  );
}

export default App;
