//navigates to everywhere except homepage
//has log out button
import React from 'react';
import search from '../images/search2.png';
import { Button, Col,   Form,  Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';

function NavigationBar(props) {
    return (
        <>
        
          
            <Navbar bg="dark" expand="md" variant="dark" id='nav' style={{width:"100%",margin:"0px", boxSizing:"border-box", borderTopLeftRadius:"10px", borderTopRightRadius:"10px"}}>
          <Nav  className="me-auto "  style={{ width:"99%"}}>
                
          <Col md={2}>
            <Nav.Link  href="/">HOME</Nav.Link>
            </Col>
            
            <Col md={2}>
            <Nav.Link href="#mypost">MY POST</Nav.Link>
            </Col>
            <Col md={2}>
            <Nav.Link href="/feed">FEED</Nav.Link>
            </Col>
            <Col md={2}>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="ME"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/profile/:id">My Profile</NavDropdown.Item>
              
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
            <Button variant="outline">
              <img src={search} alt="Search" style={{height:"40px",width:"40px", marginTop:'-15px'}}/>
            </Button>
          </Form>
          </Col>
          </Nav>
          
      </Navbar>
      </>
    );
}

export default NavigationBar;