import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';

export default function NavBar(){

    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Holiday Gift Exchange</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Participants</Nav.Link>
          </Nav>
          <Button>Login</Button>
        </Navbar.Collapse>
      </Navbar>
    )
}