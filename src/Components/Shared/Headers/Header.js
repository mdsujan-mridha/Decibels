import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogOut = () =>{
    signOut(auth);
  }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as = {NavLink} to ="home"> Decibels </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as = {NavLink} to="home" > Home </Nav.Link>
      <Nav.Link as = {NavLink} to="products" > Product </Nav.Link>
     
      
    </Nav>
    <Nav>
      {
        user?
        <Nav.Link onClick={handleLogOut}> LogOut </Nav.Link> 
        :
      <Nav.Link as={NavLink} to= "login" > Login </Nav.Link>
      }
      

      <Nav.Link as={NavLink} to="about">
        About us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;