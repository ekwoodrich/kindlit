import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import DragFile from './DragFile';
import { API_URL } from '../constants';
import InputMode from './InputMode';
import FailureMode from './FailureMode';
import SuccessMode from './SuccessMode';

class SendToKindle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      file: null,
      mode: 'input'
    };
  }
  _setMode = mode => {
    this.setState({ mode: mode });
  };
  _changeFile = e => {
    this.setState({ file: null });
    this.props.fileChanged();
    e.preventDefault();
  };
  _addAnother = () => {
    this._setMode('input');
    this.setState({ file: null });
    this.props.fileChanged();
  };
  _setFile = file => {
    this.setState({ file: file });
  };
  _sendUrlOrTitle = e => {
    console.log('send kindle' + this.state.text);
    const formData = new FormData();

    formData.append('text', this.state.text);
    formData.append('email', this.props.email);
    formData.append('book', this.state.file);

    const setMode = this._setMode;
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
        if (data.result == 'success') setMode('success');
        else setMode('failure');
      });
    e.preventDefault();
  };

  render() {
    return (
      <div>
        {this.state.mode == 'input' && (
          <div>
            <InputMode
              state={this.state}
              onFileChange={this._changeFile}
              onSend={this._sendUrlOrTitle}
              setFile={this._setFile}
            />
          </div>
        )}
        {this.state.mode == 'failure' && (
          <div>
            <FailureMode tryAgain={this._addAnother} />
          </div>
        )}
        {this.state.mode == 'success' && (
          <div>
            <SuccessMode addAnother={this._addAnother} />
          </div>
        )}
      </div>
    );
  }
}

export default SendToKindle;
