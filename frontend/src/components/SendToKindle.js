import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import DragFile from './DragFile';

class SendToKindle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      file: null
    };
  }
  _sendUrlOrTitle = e => {
    console.log('send kindle' + this.state.text);
    const formData = new FormData();

    formData.append('text', this.state.text);
    formData.append('email', this.props.email);
    formData.append('book', this.state.file);

    fetch('http://localhost:8080/api/book/send', {
      method: 'post',
      body: formData,
      headers: {
        //'Content-Type': 'application/json'
        //'Content-Type': 'application/x-www-form-urlencoded',
      },
      attachment: this.state.file
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
        {this.props.email && (
          <div>
            <input
              type="text"
              placeholder="Book URL or title"
              id="mainBookInput"
              class="mainInput"
              onChange={e => {
                this.setState({ text: e.target.value });
              }}
              value={this.state.text}
            ></input>
            <Button
              onClick={this._sendUrlOrTitle}
              className="ml-1"
              variant="primary"
            >
              Send to Kindle
            </Button>
            <DragFile
              onFile={files => {
                console.log(files);
                if (files) {
                  this.setState({ file: files[0] });
                }
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default SendToKindle;
