// Import NPM
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Import Components 
import App from './Components/App';
import store from './Store';

// Import Assets
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename={"/"}>
        <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);