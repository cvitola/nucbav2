import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import MiContexto from './Context'

ReactDOM.render(
  <MiContexto.Provider value="mh Ke Dize">
    <App />
    </MiContexto.Provider>,
  document.getElementById('root')
);

