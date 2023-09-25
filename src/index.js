import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS_files/index.css';
import App from './App';
import { BrowserRouter as Router,Route} from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import theme from './Pages/ChangePassword/theme.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}>
      <CssBaseline /> */}
      <Router>
        <Route path="/">
          <App />
        </Route>

      </Router>
    {/* </ThemeProvider> */}
    {/* <Router>
      
    </Router> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
