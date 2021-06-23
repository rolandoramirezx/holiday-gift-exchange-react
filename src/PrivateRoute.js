import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function PrivateRoute(props){

    const {component} =  props;
    let isAuthenticated = true;

    return(
        <Route render={isAuthenticated ? component : <Redirect to="/login"/>} />    
        )
}