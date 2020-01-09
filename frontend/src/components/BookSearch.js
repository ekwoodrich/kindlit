import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    return (
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
          onClick={this.props.cancelSearch}
          className="ml-1"
          variant="secondary"
          size="sm"
        >
          Cancel
        </Button>
        <div></div>
      </div>
    );
  }
}

export default BookSearch;
