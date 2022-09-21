import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import css files
import './Assets/css/reactPlayer.css';
import './Assets/css/navStyle.css';

// import './Assets/css/hero_section.scss';
import './Assets/css/hero_section.css';
import './Assets/css/herro_section.css';
// import bootstrap
import './Assets/css/bootstrap.min.css';
// import redux
import {Provider} from "react-redux";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);
