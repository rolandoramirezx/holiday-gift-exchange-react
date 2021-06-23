import React, {useState} from 'react';
import {Table, Button} from 'react-bootstrap';
import WishListModal from './WishListModal';

export default function ParticipantsTable(props){
    
    const {participants} =  props;

    const [show, setShow] =  useState(false);

    if(participants){
      return(
        <div className="d-flex p-5">
        <WishListModal show={show} handleClose={() => setShow(false)} name={"John Doe"}/>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, k) =>
            <tr>
              <td key={k}>{participant.key}</td>
              <td>{participant.firsName}</td>
              <td>{participant.lastName}</td>
              <td>{participant.wishList}</td>
            </tr>
          )}
        </tbody>
      </Table>
        </div>
     )
    } else{
      return <div className="d-flex justify-content-center">Loading...</div>
    }

}