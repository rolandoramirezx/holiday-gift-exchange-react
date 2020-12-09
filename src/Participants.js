import React from 'react';
import {Table, Button} from 'react-bootstrap';
import WishListModal from './WishListModal';
import NavBar from './NavBar';

export default function Participants () {

  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState("John Doe");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
      <NavBar/>
      <WishListModal show={show} handleClose={handleClose} name={name}></WishListModal>
    <h1 className="text-center">Participants</h1>
    <p className="text-center">This gift exchange has a maximum spending amount of $50.00 USD and  a minimum of $10.00 USD</p>
    <div className="d-flex p-5">
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Wish List</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td><div className="d-flex justify-content-center"><Button onClick={()=>setShow(true)}>View Wish List</Button></div></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td><div className="d-flex justify-content-center"><Button onClick={()=>setShow(true)}>View</Button></div></td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td><div className="d-flex justify-content-center"><Button onClick={()=>setShow(true)}>View</Button></div></td>
      </tr>
    </tbody>
  </Table>
    </div>

    </div>
  );

}