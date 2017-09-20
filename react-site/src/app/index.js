import React from 'react';

import Message from 'components/message';
import Editor from 'components/editor';

const NS = 'app--'

export default (props) => (
  <div className="container">
    <h1>Welcome to React Folks</h1>
    <Editor onSubmit={(message) => {console.log (message)}}/>
    {props.messages.map (Message)}
  </div>
)