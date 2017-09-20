import React from 'react';
import ReactDOM from 'react-dom';

import App from 'app';
import messages from 'data/messages.json';

require ('./index.scss')


window.onload = () => {
  ReactDOM.render (<App messages={messages} />, document.getElementById ('app'))
}