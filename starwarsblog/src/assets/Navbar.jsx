import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link, Form } from 'react-router-dom';
import FavoritesDropdown from './favorites';

const Navigation = () => {
    return (
    <div className="container-fluid p-0">
    <Navbar className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" expand="lg">
      <div className="d-flex justify-content-between mx-5" style={{ width: "80vw"}}>
      <Navbar.Brand as={Link} to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/1200px-Star_Wars_Yellow_Logo.svg.png" alt="Star Wars logo" style={{ height:"100px"}}/></Navbar.Brand>
      </div>
      <div className="me-5 d-flex flex-row justify-content-between align-items-center">
        <div className="pe-3">
        <input />
        </div>
        <div className="me-5">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <FavoritesDropdown /> 
          </Navbar.Collapse>
        </div>
        
        </div>
      </Navbar>

      
    </div>
    
  );
};

export default Navigation;