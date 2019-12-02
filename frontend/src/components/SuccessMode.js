import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class SuccessMode extends Component {
  render() {
    return (
      <div>
        <h3>Success!</h3>
        <Button
          onClick={this.props.addAnother}
          className="ml-1"
          variant="primary"
        >
          Send another file
        </Button>
      </div>
    );
  }
}

export default SuccessMode;
