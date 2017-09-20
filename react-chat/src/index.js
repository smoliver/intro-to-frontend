import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/database';

import App from 'app';
import firebaseConfig from 'firebase.config.js';

require ('./index.scss')

firebase.initializeApp (firebaseConfig);
let messages = firebase.database().ref ('messages');


window.onload = () => {
  ReactDOM.render (<App messages={messages} />, document.getElementById ('app'))
}