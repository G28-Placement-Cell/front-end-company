import './CSS_files/App.css';
// import Navbar from './Pages/Navbar';
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import { Tablet } from "./Pages/JobProfile/Reg_Students.js"
import { useState, useEffect } from "react";
import api from "./api/posts.js";
import Announcement from "./Pages/Announcement.js";
import ChangePassword from "./Pages/ChangePassword/ChangePassword.js";
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import ContactUs from "./Pages/ContactUs.js";
import CompanyProfile from "./Pages/CompanyProfile.js";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SeePost from "./Pages/JobProfile/Seepost.js";
import NewPost from "./Pages/JobProfile/Newpost.js";
import EditPost from "./Pages/JobProfile/Editpost.js";
import Details from "./Pages/JobProfile/Details.js";
import AnnouncementSectionStudent from './Pages/AnnouncementSectionStudent';
import AddAnnouncementStudent from './Pages/AddAnnouncementStudent';
// import FooterJ from './Pages/JobProfile/Footer';
import { Errored } from "./Pages/Errored.js";
import { CompanyLogin } from "./Pages/CompanyLogin.js";
import { CompanyRegister } from "./Pages/CompanyRegister.js";
import { ToastContainer } from "react-toastify";
import AboutUs from './Pages/AboutUs.js';
import AnnouncementSection from "./Pages/Adminannoun.js"
import Announcements from "./Pages/Announcement.js"
import AddAnnouncement from './Pages/Addannouncement.js';
import ForgotPass from './Pages/ForgotPass.js';
import LogOut from './Pages/LogOut.js';

// import AddAnnouncement from './Pages/Addannouncement.js';
// import Footer from './Pages/JobProfile/Footer';



function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editName, seteditName] = useState("");
  const [editBody, setEditBody] = useState("");
  const [editType, seteditType] = useState("");
  const [editCPI, seteditCPI] = useState("");
  const [editOpenfor, seteditOpenfor] = useState("");
  const [editRegopen, seteditRegopen] = useState("");
  const [editRegclose, seteditRegclose] = useState("");
  const [editLink, seteditLink] = useState("");
  const [location, setLocation] = useState("");
  const [companytype, setCompanytype] = useState("");
  const [CTC, setCTC] = useState("");
  const [stipend, setStipend] = useState("");

  // const navigate = useNavigate();

  const handleEdit = async (id) => {
    const updatedPost = {
      id,
      name: editName,
      type: editType,
      location: location,
      cpi: editCPI,
      open_for: editOpenfor,
      company_type: companytype,
      reg_open: editRegopen,
      reg_close: editRegclose,
      ctc: CTC,
      sti: stipend,
      body: editBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...updatedPost } : post))
      );
      seteditName("");
      setEditBody("");
      seteditType("");
      seteditCPI("");
      seteditOpenfor("");
      seteditRegopen("");
      seteditRegclose("");
      setCTC("");
      setStipend("");
      setCompanytype("");
      setLocation("");
      // navigate('/');
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newPost = {
      id,
      name: editName,
      type: editType,
      location: location,
      cpi: editCPI,
      open_for: editOpenfor,
      company_type: companytype,
      reg_open: editRegopen,
      reg_close: editRegclose,
      ctc: CTC,
      sti: stipend,
      body: editBody,
    };
    const response = await api.post("./posts", newPost);
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    seteditName("");
    setEditBody("");
    seteditType("");
    seteditCPI("");
    seteditOpenfor("");
    seteditRegopen("");
    seteditRegclose("");
    seteditLink("");
    setCTC("");
    setStipend("");
    setCompanytype("");
    setLocation("");
    // navigate('/');
  };

  // useEffect(() => {
  //   const filteredResults = posts.filter(
  //     (post) =>
  //       post.name.toLowerCase().includes(search.toLowerCase()) ||
  //       post.name.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setSearchResults(filteredResults);
  // }, [posts, search]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   async function fetchPosts() {
  //     try {
  //       console.log("hii");
  //       const response = await api.get("/posts");
  //       setPosts(response.data);
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error : ${err.message}`);
  //       }
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   setTimeout(() => {
  //     fetchPosts();
  //   }, 2000);
  // }, []);

  return (
    // <div >
    <Router>
      <Header />
      <div style={{ minHeight: "84vh", backgroundColor: "#E4EAF5" }}>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<CompanyLogin />} />
          <Route exact path="/profile" element={<CompanyProfile />} />
          <Route exact path="/register" element={<CompanyRegister />} />
          <Route exact path="/companyprofile" element={<CompanyProfile />} />
          <Route exact path="/jobprofile" element={<SeePost posts={searchResults} isLoading={isLoading} />} />
          <Route exact path='/adminannouncements' element={<AnnouncementSection />} />
          <Route exact path='/announcements/company' element={<Announcements />} />
          <Route exact path='/addAnnouncementStudent' element={<AddAnnouncement />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route exact path="/resetpassword" element={<ResetPassword />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/forgotpass" element={<ForgotPass />} />
          {/* <Route exact path="/seepost" element = {<SeePost posts={searchResults} isLoading={isLoading} />} /> */}
          <Route exact path="/newpost"
            element={<NewPost
              handleSubmit={handleSubmit}
              editName={editName}
              seteditName={seteditName}
              editBody={editBody}
              setEditBody={setEditBody}
              editType={editType}
              seteditType={seteditType}
              editCPI={editCPI}
              seteditCPI={seteditCPI}
              editLink={editLink}
              seteditLink={seteditLink}
              editOpenfor={editOpenfor}
              seteditOpenfor={seteditOpenfor}
              editRegopen={editRegopen}
              seteditRegopen={seteditRegopen}
              editRegclose={editRegclose}
              seteditRegclose={seteditRegclose}
              location={location}
              setLocation={setLocation}
              companytype={companytype}
              setCompanytype={setCompanytype}
              CTC={CTC}
              setCTC={setCTC}
              stipend={stipend}
              setStipend={setStipend}
            />} />
          <Route exact path="/moredetails/:id" element={<Details posts={posts} />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route exact path="/editpost/:id" element={<EditPost />} />
          <Route path="/seereg/:id" element={<Tablet />}></Route>
          <Route path='/logout' element={<LogOut />}></Route>
          <Route path="*" element={<Errored />} />
          {/* </Switch> */}
        </Routes>
      </div>
      <Footer />
    </Router>

  );
}

export default App;
