import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class FailureMode extends Component {
  render() {
    return (
      <div>
        <h3>Something went wrong.</h3>
        <Button
          onClick={this.props.tryAgain}
          className="ml-1"
          variant="primary"
        >
          Try again
        </Button>
      </div>
    );
  }
}

export default FailureMode;
