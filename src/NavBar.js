import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import LoginModal from './LoginModal';

export default function NavBar(){

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [buttonText, setButtonText] = React.useState("Login")

  function updateButton(){
      setButtonText("Logout");
      setShow(false);
  }

  function logoutUser(){
    setButtonText("Login");
  }
    
  return(
    <div>
      <LoginModal show={show} handleClose={handleClose} handleAction={()=>updateButton()}/>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand to={"/"}>Plant Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link ><NavLink to="/">Home</NavLink></Nav.Link>
          <Nav.Link ><NavLink to="/participants">Participants</NavLink></Nav.Link>
          <Nav.Link ><NavLink to="/my-wish-list">My Wish List</NavLink></Nav.Link>
        </Nav>
        <div className="d-flex justify-content-end">
          <Button onClick={buttonText === "Login" ? handleShow : logoutUser} variant={buttonText === "Login" ? "primary" : "secondary"}>{buttonText}</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}