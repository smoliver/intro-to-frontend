import React from 'react';

const NS = 'app--'

export default (props) => (
  <div className="container">
    <h1>Welcome to React Folks</h1>
    <p>{props.messages}</p>
  </div>
)