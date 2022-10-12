//navigates to everywhere except homepage
//has log out button
import React, { useEffect, useState } from 'react';
import search from '../images/search2.png';
import { Button, Col,   Form,  Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function NavigationBar(props) {

  const [disbled,setDisabled]=useState(false);
  const location=useLocation();
  let  currentUser ;
  const navigate=useNavigate();

  const navigator=()=>{
    navigate(`/${currentUser.email}`,{state:{currentUser: currentUser}}); 
   }

  useEffect(()=>{
    if(window.location.pathname==="/"){
      setDisabled(true);
    }
    else{
      setDisabled(false);
      currentUser = location.state.currentUser;
    }
  },[location])

    return (
        <>
        
          
            <Navbar bg="dark" expand="md" variant="dark" id='nav' style={{width:"100%",margin:"0px", boxSizing:"border-box", borderTopLeftRadius:"10px", borderTopRightRadius:"10px"}}>
          <Nav  className="me-auto "  style={{ width:"99%"}}>
                
          <Col md={2}>
            <Nav.Link  href="/" >HOME</Nav.Link>
            </Col>
            
            <Col md={2}>
            <Nav.Link href="#mypost" className={disbled?"disabled":""}>MY POST</Nav.Link>
            </Col>
            <Col md={2}>
            <Nav.Link href="/feed" className={disbled?"disabled":""}>FEED</Nav.Link>
            </Col>
            <Col md={2}>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="ME"
              menuVariant="dark" 
            >
              <NavDropdown.Item onClick={navigator} className={disbled?"disabled":""}>My Profile</NavDropdown.Item>
              
              <NavDropdown.Item href="/" className={disbled?"disabled":""}>Log Out</NavDropdown.Item>
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
            <Button variant="outline" className={disbled?"disabled":""}>
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