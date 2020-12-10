import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import LoginModal from './LoginModal';

export default function NavBar(){

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
      <div>
        <LoginModal show={show} handleClose={handleClose}/>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand to={"/"}>Holiday Gift Exchange</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link ><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/participants">Participants</NavLink></Nav.Link>
          </Nav>
          <div className="d-flex justify-content-end">
            <Button className="my-button" onClick={()=>setShow(true)}>Login</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
}