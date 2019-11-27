import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Dropzone from 'react-dropzone'

class DragFile extends Component {
  
  render() {
    return (
      <div>

        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Image id="mainDragImage" src={require('../assets/drop.png')} />
        <p>drag and drop MOBI or PDF</p>
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
