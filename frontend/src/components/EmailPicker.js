import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class EmailPicker extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Kindle email address"
          id="mainEmailInput"
          class="mainInput"
        ></input>
        
        <Button className="ml-1" variant="primary">
          Save email
        </Button>
      </div>
    );
  }
}

export default EmailPicker;
