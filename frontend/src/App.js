import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import EmailPicker from './components/EmailPicker';
import SendToKindle from './components/SendToKindle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        hasEmail : true
    }
  }
  render() {
    
  return (
    <div className="main">
      <Navbar  expand="lg">
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto navbar-dark">
      <Nav.Link class="text-light"href="/about">About</Nav.Link>
      <Nav.Link href="/privacy">Privacy</Nav.Link>
      <Nav.Link href="https://github.com/ekwoodrich/kindlit">GitHub</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
      <Container id="mainContainer">
        <div className="mainRow">
        <Image id="mainLogo" src={require('./assets/kindlit_logo.png')} />
          <h1>kindlit</h1>
          <h5 id="mainSubheader">send to kindle</h5>
        </div>
        <div className="mainRow">
          <EmailPicker/>
        </div>
        { this.state.hasEmail &&
          <div className="mainRow">
            <SendToKindle/>
          </div>
        }
      </Container>
    </div>
  );

}
}

export default App;
