import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import reportWebVitals from './reportWebVitals';
// import theme from './Pages/ChangePassword/theme.js';
import { Provider } from 'react-redux';
import store from './store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
        <CssBaseline />
        <App />
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
