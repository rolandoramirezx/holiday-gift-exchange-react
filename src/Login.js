import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

export default function Login(props){

    const {targetRoute} = props;

    function redirectToTargetPage(){
        return(<Redirect to={targetRoute}/>)
    }

    return(
        <div className="d-flex justify-content-center">
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
                <Button onClick={()=>redirectToTargetPage()}>Login</Button>
            </div>
            </Form>
        </div>
    )
}