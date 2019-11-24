import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

class DragFile extends Component {
  render() {
    return (
      <div>
        <Image id="mainDragImage" src={require('../assets/drop.png')} />
        <span id="mainDragMessage">drag and drop MOBI or PDF</span>
      </div>
    );
  }
}

export default DragFile;
