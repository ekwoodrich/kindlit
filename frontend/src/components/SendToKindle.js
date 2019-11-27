import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import DragFile from './DragFile';

class SendToKindle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'text' : '',
    }
  }
  _sendUrlOrTitle = e => {
    console.log('send kindle');
    fetch('http://localhost:8080/api/book/send', {
      method: 'post',
      body: JSON.stringify(this.state.text)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log('sent book', data);
      });
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Book URL or title"
          id="mainBookInput"
          class="mainInput"
          onChange={e => {this.setState({'text' : e.target.value})}}
          value={this.state.text}
        ></input>
        <Button
          onClick={this._sendUrlOrTitle}
          className="ml-1"
          variant="primary"
        >
          Send to Kindle
        </Button>
        <DragFile />
      </div>
    );
  }
}

export default SendToKindle;
