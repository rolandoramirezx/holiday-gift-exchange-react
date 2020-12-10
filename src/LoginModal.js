import React from "react";
import {Modal, Button} from "react-bootstrap";
import {Form} from 'react-bootstrap';

export default function LoginModal(props){
    
    const {show, handleClose, name} = props;

    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Enter your username..." />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password..." />
            </Form.Group>
            <div className="d-flex justify-content-end">
            <Button variant="primary">
                Login
            </Button>
            </div>
            </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
}