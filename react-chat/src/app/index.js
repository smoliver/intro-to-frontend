import React from 'react';

import MessageList from 'components/message-list';
import Editor from 'components/editor';

import Message from 'models/message';

const NS = 'app--'

class App extends React.Component {
  constructor (props) {
    super (props)

    this.props.messages.on ('child_added', this.onRemoteMessageAdded.bind (this));

    this.state = {
      messages : [],
      displayFilter : ((val) => val)
    }
  }

  setDisplayFilter (filter) {
    this.setState ({
      displayFilter: filter
    });
  }

  onRemoteMessageAdded (data) {
    this.setState ({
      messages: [...this.state.messages, {...data.val (), key: data.key}]
    });
  }

  addMessage (messageText) {
    // Ensures that only filled messages are created
    if (messageText == undefined || messageText === '') return;

    // Create a new message object
    const message = new Message (messageText);

    // Add it to the firebase database
    const messageRef = this.props.messages.push ();
    messageRef.set (message);

    // Add it to the state messages array, with its corresponding firebase key
    this.setState ({
      messages: [...this.state.messages, {...message, key: messageRef.key}]
    });
  }

  render () {
    const displayMessages = this.state.displayFilter (this.state.messages);
    return (
      <div className={`${NS}container`}>
        <MessageList className={`${NS}message-list`} messages={displayMessages}/>
        <Editor onSubmit={this.addMessage.bind (this)}/>
      </div>
    );
  }
}

export default App;