import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class EmailPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'email' : '',
      'savedEmail' : JSON.parse(localStorage.getItem('email'))
    }
  }
  _saveEmail = (e) => {
    console.log("save email");
    localStorage.setItem('email', JSON.stringify(this.state.email));
    this.setState({savedEmail : this.state.email});
    e.preventDefault();
  }
  render() {
    return (
      <div>
        {this.state.savedEmail && (

          <div>
            <span>{this.state.savedEmail}</span>
          </div>
        )}
        {!this.state.savedEmail && (
          <div>
        <input
          type="text"
          placeholder="Enter Kindle email address"
          id="mainEmailInput"
          class="mainInput"
          onChange={e => {this.setState({'email' : e.target.value})}}
          value={this.state.email}
        ></input>
        
        <Button onClick={this._saveEmail} className="ml-1" variant="primary">
          Save email
        </Button>
        </div>
        )}
      </div>
      
    );
  }
}

export default EmailPicker;
