/* //sign in
//sign up
//search bar-click to pop up sign up
//two posts featured
//sign in/up asked after 10sec
//viewed before sign in after log out*/



import food1 from '../../images/food4.jpg';
import food2 from '../../images/food1.jpg';
import dalroti from "../../images/dishpic1.jpg"
import logo from "../../images/Daniel Gallego.png"

import React, { useState } from 'react';
import { Button, Carousel, Container, Form, Modal, Row } from 'react-bootstrap';
import './Homepage.css';

function Homepage(props) {

    const[user,setUser]=useState({
        /* profileimg:"",*/ name:"",contact:"", email:"", password:""});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)


    const handleInputs=(e)=>{
        const{name,value}=e.target;
        setUser({...user, [name]:value});
    };
    return (
        <>
        <Container style={{width:"60%"}} className='home-container'>
        <Carousel className='slider'>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={dalroti}
          alt="First slide"
          id="carousel"
        />
        <img
          src={logo}
          alt="chef's way"
          id="stamp"
        />
        <Carousel.Caption>
          <h3>Dal Roti</h3>
          <p>The staple diet.</p> <Button variant='warning' onClick={handleShow}>Register</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={food1}
          alt="Second slide"
          id="carousel"
        />
        <img
          src={logo}
          alt="chef's way"
          id="stamp"
        />
        <Carousel.Caption>
          <h3>Allo Masala Sandwich</h3>
          <p>Every Household Breakfast.</p><Button variant='warning' onClick={handleShow}>Register</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={food2}
          alt="Third slide"
          id="carousel"
        />
        <img
          src={logo}
          alt="chef's way"
          id="stamp"
        />
        <Carousel.Caption>
          <h3>Paneer Butter Masala with Nan</h3>
          <p>Restaurant's must in menu "PANEER"</p><Button variant='warning' onClick={handleShow}>Register</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form>
            
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required name='name' value={user.name}  onChange={handleInputs} type="text" placeholder="Enter your name" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contact">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control required name="contact" value={user.contact} onChange={handleInputs} type="number" min="5555555555" max="9999999999" placeholder="Enter your phone number" />
                        <Form.Control.Feedback type="invalid">
                        Please provide a valid contact number.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required name="email" value={user.email} onChange={handleInputs} type="email" placeholder="Enter email" />
                        <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required name="password" value={user.password} onChange={handleInputs} type="password" placeholder="Password" />
                        <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary"  type="submit">
                        Sign Up
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
        </Container>
        </>
           
    );
}

export default Homepage;