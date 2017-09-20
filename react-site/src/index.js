import React from 'react';
import ReactDOM from 'react-dom';

import App from 'app';

require ('./index.scss')


window.onload = () => {
  console.group ();
  ReactDOM.render (<App messages="here is a message" />, document.getElementById ('app'))
  console.groupEnd ();
}