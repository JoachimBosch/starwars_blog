import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FavoritesDropdown from './favorites';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Star Wars</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/people">People</Nav.Link>
          <Nav.Link as={Link} to="/vehicles">Vehicles</Nav.Link>
        </Nav>
        <FavoritesDropdown /> 
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;