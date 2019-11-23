import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="main">
      <Container id="mainContainer">
        <div class="mainRow">
        <Image id="mainLogo" src={require('./assets/kindlit_logo.png')} />
          <h1>kindlit</h1>
          <h5 id="mainSubheader">send to kindle</h5>
        </div>
        <div class="mainRow">
          <input
            type="text"
            placeholder="Enter kindle email address"
            id="mainEmailInput"
          ></input>
          <Button variant="primary">Save email</Button>
        </div>

        <div class="mainRow">
          <input
            type="text"
            placeholder="Book URL or title"
            id="mainBookInput"
          ></input>
          <Button variant="primary">Send to Kindle</Button>
        </div>
        <div class="mainRow">
          <Image id="mainDragImage" src={require('./assets/drop.png')} />
          <span id="mainDragMessage">drag and drop MOBI file</span>
        </div>
      </Container>
    </div>
  );
}

export default App;
