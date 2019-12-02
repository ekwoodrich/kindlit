import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import DragFile from './DragFile';

class InputMode extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.state.file && (
            <div>
              {this.props.state.file.path}
              <Button
                onClick={this.props.onFileChange}
                className="ml-1"
                variant="secondary"
                size="sm"
              >
                Change
              </Button>
            </div>
          )}
          {!this.props.state.file && (
            <div>
              <input
                type="text"
                placeholder="Book URL or title"
                id="mainBookInput"
                class="mainInput"
                onChange={e => {
                  this.setState({ text: e.target.value });
                }}
                value={this.props.state.text}
              ></input>
              <DragFile
                onFile={files => {
                  console.log(files);
                  if (files) {
                    this.props.setFile(files[0]);
                  }
                }}
              />
            </div>
          )}
          {this.props.state.file && (
            <div>
              <Button
                onClick={this.props.onSend}
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

export default InputMode;
