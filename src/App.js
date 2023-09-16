import './App.css';
import Navbar from './Navbar';
import {Route,Switch} from 'react-router-dom';
import Profile from './Profile.js';
import Announcement from './Announcement.js';
import Results from './Results.js';
import ChangePassword from './ChangePassword.js';
import AboutUs from './AboutUs.js';
import Missing from './Missing.js';

function App() {
  
  return (
    <div className="main">
      <Switch>
        <Route exact path='/'>
          <Navbar />
        </Route>
        <Route exact path='/profile'>
          <Profile/>
        </Route>
        <Route exact path='/announcement'>
          <Announcement/>
        </Route>
        <Route exact path='/result'>
          <Results/>
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
        <Route path="*">
          <Missing />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
