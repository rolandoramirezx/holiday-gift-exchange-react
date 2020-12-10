import React from 'react';
import {Table, Button} from 'react-bootstrap';

export default function ParticipantsTable(props){
    
    const {participants, setShow} = props;

     return(
        <div className="d-flex p-5">
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
     )
}