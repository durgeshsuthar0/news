import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Headernav() {
  return (
    <Navbar expand="lg" className="headernav">
      <Container >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Nav.Link > <Link id='link' to="/">HOME</Link></Nav.Link>
            <Nav.Link> <Link id='link' to="/Country">COUNTRY</Link></Nav.Link>

            <NavDropdown  title="CITY & STATE" id="basic-nav-dropdown">
              <NavDropdown.Item><Link id='droplink' to="/Rajasthan">Only Rajasthan</Link></NavDropdown.Item>
              <NavDropdown.Item><Link id='droplink' to="/Gujarat">Gujarat</Link></NavDropdown.Item>
              <NavDropdown.Item><Link id='droplink' to="/Delhi">Delhi</Link></NavDropdown.Item>
              <NavDropdown.Item><Link id='droplink' to="/Bihar">Bihar</Link></NavDropdown.Item>
              <NavDropdown.Item><Link id='droplink' to="/Uttrakhand">Uttrakhand</Link></NavDropdown.Item>
            
            </NavDropdown>

            <Nav.Link> <Link id='link' to="Gameeducation">GAME & EDUCATION</Link></Nav.Link>
            <Nav.Link> <Link id='link' to="/Business">BUSINESS</Link></Nav.Link>
            <Nav.Link> <Link id='link' to="/Monthlymagazine">MONTHLY MAGAZINE</Link></Nav.Link>
            {/* <Nav.Link  href="#link">LAW</Nav.Link>
          <Nav.Link  href="#link">SCIENCE</Nav.Link>
          <Nav.Link  href="#link">CULTURE</Nav.Link>
          <Nav.Link  href="#link">OPINION</Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Headernav
