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