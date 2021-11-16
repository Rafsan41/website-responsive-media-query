import React from 'react';
import {Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../Hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    console.log(user);
    return (
           <>
    <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
           <Navbar.Brand href="#home">Super car Service</Navbar.Brand>
           <Navbar.Toggle />
           <Navbar.Collapse className="justify-content-end">
                     <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                     <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                     <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        {user?.email ? <Button onClick={logOut} variant="light">Log Out     </Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
             <Navbar.Text>
                             .  Signed in as: <a href="#login">{user.name}</a>
            </Navbar.Text>
            </Navbar.Collapse>
    </Container>
    </Navbar>
</> 
    
    );
};

export default Header;