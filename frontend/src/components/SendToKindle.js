import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import DragFile from './DragFile';
import { API_URL } from '../constants';

class SendToKindle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      file: null
    };
  }
  _changeFile = e => {
    this.setState({ file: null });
    this.props.fileChanged();
    e.preventDefault();
  };
  _sendUrlOrTitle = e => {
    console.log('send kindle' + this.state.text);
    const formData = new FormData();

    formData.append('text', this.state.text);
    formData.append('email', this.props.email);
    formData.append('book', this.state.file);

    fetch(API_URL + '/api/book/send', {
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
        <div>
          {this.state.file && (
            <div>
              {this.state.file.path}
              <Button
                onClick={this._changeFile}
                className="ml-1"
                variant="secondary"
                size="sm"
              >
                Change
              </Button>
            </div>
          )}
          {!this.state.file && (
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
              <DragFile
                onFile={files => {
                  console.log(files);
                  if (files) {
                    this.props.fileChanged(files[0]);
                    this.setState({ file: files[0] });
                  }
                }}
              />
            </div>
          )}
          {this.state.file && (
            <div>
              <Button
                onClick={this._sendUrlOrTitle}
                className="ml-1"
                variant="primary"
              >
                Send to Kindle
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SendToKindle;
