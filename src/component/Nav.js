import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Navbar from 'react-bootstrap/Navbar';



function Mainnav() {
  return (
    <div className='topnav'>
      <div id="google_translate_element"></div> 
      <Navbar className='navbr' expand="lg" >
        <Container fluid>
          <Navbar.Brand className='title' href="#">Good News Daily</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Form className="ms-auto d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Mainnav;