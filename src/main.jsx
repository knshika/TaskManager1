import React from 'react';
import ReactDOM from 'react-dom';
import 'twind/shim';
import { setup } from 'twind';
import { v4 as uuidv4 } from 'uuid';
import App from './App';

uuidv4();

setup();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
