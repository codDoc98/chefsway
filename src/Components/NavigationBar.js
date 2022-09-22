//navigates to everywhere except homepage
//has log out button
import React from 'react';
import { Button, Col, Container,  Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';

function NavigationBar(props) {
    return (
        
            <Navbar bg="dark" expand="md" variant="dark" id='nav' style={{width:"100%",margin:"0px", boxSizing:"border-box", borderTopLeftRadius:"10px", borderTopRightRadius:"10px"}}>
          <Nav className="me-auto "  style={{ width:"99%"}}>
                
          <Col md={2}>
            <Nav.Link href="#home">HOME</Nav.Link>
            </Col>
            
            <Col md={2}>
            <Nav.Link href="#mypost">MY POST</Nav.Link>
            </Col>
            <Col md={2}>
            <Nav.Link href="#feed">FEED</Nav.Link>
            </Col>
            <Col md={2}>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="ME"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action 1">My Profile</NavDropdown.Item>
              
              <NavDropdown.Item href="#action 2">Log Out</NavDropdown.Item>
              </NavDropdown>
              </Col>
              <Col md={4}>
              <Form className="d-flex" placement="end">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Col>
          </Nav>
          
      </Navbar>
    );
}

export default NavigationBar;