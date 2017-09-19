import React from 'react';
import ReactDOM from 'react-dom';

require ('index.scss');

class App extends React.Component {
  constructor (props) {
    super (props)
  }

  componentWillMount() {
    console.log ('Component Will Mount')
  }

  render () {
    console.log ('Render')
    return (
      <div className="container">
        <h1>Welcome to React Folks</h1>
        <p>This is pretty simple and almost a waste of code.  We could write this more succinctly!</p>
      </div>
    )
  }

  componentDidMount () {
    console.log ('Component Did Mount')
  }

  componentWillReceiveProps () {

  }
  
  shouldComponentUpdate () {
    // Defaults to true
  }

  componentWillUpdate () {

  }

  componentDidUpdate () {

  }
}

window.onload = () => {
  console.group ();
  ReactDOM.render (<App messages={messages}/>, document.getElementById ('app'))
  console.groupEnd ();
}