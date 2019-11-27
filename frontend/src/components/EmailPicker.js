import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class EmailPicker extends Component {
  constructor(props) {
    super(props);
    this.props.emailChanged(JSON.parse(localStorage.getItem('email')));
    this.state = {
      email: '',
      savedEmail: JSON.parse(localStorage.getItem('email'))
    };
  }
  _editEmail = e => {
    console.log('email changed');
    this.setState({ email: '' });
    this.setState({ savedEmail: '' });
    this.props.emailChanged(this.state.email);
    localStorage.setItem('email', JSON.stringify(''));
    e.preventDefault();
  };
  _saveEmail = e => {
    console.log('save email');
    localStorage.setItem('email', JSON.stringify(this.state.email));
    this.setState({ savedEmail: this.state.email });
    this.props.emailChanged(this.state.email);
    e.preventDefault();
  };
  render() {
    return (
      <div>
        {this.state.savedEmail && (
          <div>
            <span>{this.state.savedEmail}</span>
            <Button
              onClick={this._editEmail}
              className="ml-1"
              variant="secondary"
              size="sm"
            >
              Edit
            </Button>
          </div>
        )}
        {!this.state.savedEmail && (
          <div>
            <input
              type="text"
              placeholder="Enter Kindle email address"
              id="mainEmailInput"
              class="mainInput"
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
              value={this.state.email}
            ></input>

            <Button
              onClick={this._saveEmail}
              className="ml-1"
              variant="primary"
            >
              Save email
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default EmailPicker;
