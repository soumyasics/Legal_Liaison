import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './LandingCarousel.css';
import img1 from '../../Assets/logo2.png';

function LandingNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
      <Navbar.Brand href="#">
        <img
          alt="Logo"
          src={img1}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Case<span style={{color:'#dcaf53',fontWeight:'bolder'}}>Crafts</span>
      </Navbar.Brand>
      <Nav className="nav-links nav-item">
        <Nav.Link href="#" className="nav-item">Home</Nav.Link>
        <Nav.Link href="#" className="nav-item">About Us</Nav.Link>
        <Nav.Link href="#" className="nav-item">Contact Us</Nav.Link>
        <Nav.Link href="#" className="nav-item">Login</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default LandingNavbar;
