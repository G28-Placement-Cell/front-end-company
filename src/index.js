import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import theme from './Pages/ChangePassword/theme.js';
import { Provider } from 'react-redux';
import store from './store.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <ThemeProvider theme={theme}> */}
//         <CssBaseline />
//         <App />
//       {/* </ThemeProvider> */}
//     </Provider>
//   </React.StrictMode>
// );
// reportWebVitals();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        {/* <CssBaseline /> */}
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
