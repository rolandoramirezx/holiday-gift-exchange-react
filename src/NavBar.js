import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import LoginModal from './LoginModal';

export default function NavBar(){

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
      <div>
        <LoginModal show={show} handleClose={handleClose}/>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Holiday Gift Exchange</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/participants">Participants</Nav.Link>
          </Nav>
          <Button onClick={()=>setShow(true)}>Login</Button>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
}