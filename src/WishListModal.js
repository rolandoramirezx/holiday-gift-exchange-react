import React from "react";
import {Modal, Button} from "react-bootstrap";

export default function WishListModal(props){

    const {show, handleClose, name} = props;

    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wish List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Please find {name}'s wish list below:
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
}