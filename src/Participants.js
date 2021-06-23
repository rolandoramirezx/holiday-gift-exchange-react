import React from 'react';
import {Alert} from 'react-bootstrap';
import NavBar from './NavBar';
import ParticipantsTable from './ParticipantsTable';
import axios from 'axios';


export default class Participants extends React.Component {

  constuctor(){
    this.super();
    this.state = {
      participants: []
    }
    this.getParticipants.bind(this);
  }

  async getParticipants(){
    const response = await axios.get('./participants.json')
    .then((response) => {
      this.setState({participants: response.data.participants});
    }).catch((error) => {
      console.log(error);
    });
  }

  componentDidMount(){
    this.getParticipants();
  }

  render(){
    return(
      <div>
        <NavBar/>
        <h1 className="text-center">Participants</h1>
        <Alert variant="success" className="d-flex justify-content-center">This gift exchange has a maximum spending amount of $50.00 USD and  a minimum of $10.00 USD</Alert>
        <ParticipantsTable participants={this.participants}/>
      </div>
    );
  }

} 
