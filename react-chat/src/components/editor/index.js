import React from 'react';

const NS = 'editor--';

class Editor extends React.Component {
  constructor (props) {
    super (props);

    this.changeMessage = this.changeMessage.bind (this);
    this.submit = this.submit.bind (this);

    this.state = {
      message: ''
    }
  }

  submit () {
    if (this.props.onSubmit) this.props.onSubmit (this.state.message);
    this.setState ({
      message: ''
    });
  }

  changeMessage ({target}) {
    this.setState ({
      message: target.value
    })
  }

  render () {
    return (
      <div className={`${NS}container`}>
        <input 
          type="text" 
          value={this.state.message} 
          onChange={this.changeMessage}
          className={`${NS}text-input`} />
        <button 
          className={`${NS}submit-button`}
          onClick={this.submit}
        >
          submit 
        </button>
      </div>
    )
  }
}

export default Editor;