import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom'; //Embolver el Switch en un Router... lo hago desde aca mas legible... 

ReactDOM.render(
  
    <Router>
      <App />
    </Router>,
  
  document.getElementById('root')
);


