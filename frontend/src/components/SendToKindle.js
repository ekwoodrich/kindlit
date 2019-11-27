import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import DragFile from './DragFile';

class SendToKindle extends Component {

  _sendUrlOrTitle = (e) => {
    console.log("send kindle");
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Book URL or title"
          id="mainBookInput"
          class="mainInput"
        ></input>
        <Button onClick={this._sendUrlOrTitle} className="ml-1" variant="primary">
          Send to Kindle
        </Button>
        <DragFile />
      </div>
    );
  }
}

export default SendToKindle;
