import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Headernav() {
  return ( 
    <Navbar expand="lg" className="headernav">
    <Container >
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="m-auto">
          <Nav.Link  href="#home">HOME</Nav.Link>
          <Nav.Link  href="#link">ELECTION 2024</Nav.Link>
          <Nav.Link  href="#link">POLITICS</Nav.Link>
          <Nav.Link  href="#link">ECONOMY</Nav.Link>
          <Nav.Link  href="#link">WORLD</Nav.Link>
          <Nav.Link  href="#link">SECURITY</Nav.Link>
          <Nav.Link  href="#link">LAW</Nav.Link>
          <Nav.Link  href="#link">SCIENCE</Nav.Link>
          <Nav.Link  href="#link">CULTURE</Nav.Link>
          <Nav.Link  href="#link">OPINION</Nav.Link>
          <NavDropdown title="DROPDOWN" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Headernav
