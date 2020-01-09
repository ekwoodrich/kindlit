import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class SearchButton extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={this.props.startSearch}
          className="ml-1"
          variant="primary"
        >
          Search on Project Gutenberg
        </Button>
      </div>
    );
  }
}

export default SearchButton;
