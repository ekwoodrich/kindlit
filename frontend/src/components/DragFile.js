import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Dropzone from 'react-dropzone';

class DragFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    };
  }
  render() {
    return (
      <div>
        <Dropzone onDrop={acceptedFiles => this.props.onFile(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Image id="mainDragImage" src={require('../assets/drop.png')} />
                <p id="mainDragMessage">drag and drop MOBI or PDF</p>
              </div>
            </section>
          )}
        </Dropzone>

        {/* <span id="mainDragMessage">drag and drop MOBI or PDF</span> */}
      </div>
    );
  }
}

export default DragFile;
