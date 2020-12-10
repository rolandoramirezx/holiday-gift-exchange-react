import React, { useEffect } from 'react';
import {Alert} from 'react-bootstrap';
import WishListModal from './WishListModal';
import NavBar from './NavBar';
import ParticipantsTable from './ParticipantsTable';
import axios from 'axios';

export default function Participants () {

  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState("John Doe");
  const [participants, setParticipants] = React.useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getParticipants(){
    const response = await axios.get('./participants.json');
    setParticipants(response.participants);
  }

  useEffect(() => {
    setParticipants();
  });

  return(
    <div>
      <NavBar/>
      <WishListModal show={show} handleClose={handleClose} name={name}></WishListModal>
    <h1 className="text-center">Participants</h1>
    <Alert variant="success" className="d-flex justify-content-center">This gift exchange has a maximum spending amount of $50.00 USD and  a minimum of $10.00 USD</Alert>
    <ParticipantsTable participants={participants} setShow={setShow}/>
    </div>
  );

} 