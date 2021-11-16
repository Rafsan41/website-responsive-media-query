import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Context/useAuth';
import useFirebase from '../../../Hooks/useFirebase';

const PrivateRoute = ({ children, ...rest}) => {
    const { user, isloading } = useFirebase();
    if (isloading) {
        return <Spinner  animation="border" variant="info" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ?  children :<Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
            ></Redirect>
                
           } 
        ></Route>
    );
};

export default PrivateRoute;