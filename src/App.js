import './CSS_files/App.css';
import Navbar from './Pages/Navbar';
import {Route,Switch,HashRouter as Router} from 'react-router-dom';
import JobProfile from './Pages/JobProfile.js';
import Announcement from './Pages/Announcement.js';
import ChangePassword from './Pages/ChangePassword/ChangePassword.js';
import AboutUs from './Pages/AboutUs.js';
import Missing from './Pages/Missing.js';
import ContactUs from './Pages/ContactUs.js';
import CompanyProfile from './Pages/CompanyProfile.js';

function App() {
  
  return (
    <div className="main">
      <Router>
      <Switch>
        <Route exact path='/'>
          <Navbar/>
        </Route>
        <Route exact path='/companyprofile'>
          <CompanyProfile/>
        </Route>
        <Route exact path='/jobprofile'>
          <JobProfile/>
        </Route>
        <Route exact path='/announcement'>
          <Announcement/>
        </Route>
        <Route exact path='/changepassword'>
          <ChangePassword/>
        </Route>
        <Route exact path='/aboutus'>
          <AboutUs/>
        </Route>
        <Route exact path='/logout'>
          <Navbar/>
        </Route>
        <Route exact path='/contactus'>
          <ContactUs />
        </Route>
        <Route path="*">
          <Missing />
        </Route>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
