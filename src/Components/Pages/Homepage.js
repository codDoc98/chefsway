/* //sign in
//sign up
//search bar-click to pop up sign up
//two posts featured
//sign in/up asked after 10sec
//viewed before sign in after log out



import logo from './images/logo5.png';
import food1 from './images/food3.jpg';
import food2 from './images/food1.jpg';
import food3 from './images/food2.png';
import React ,{useState}from 'react';
import {Col,Image,Form,Container,Row, Button, Modal, Stack} from 'react-bootstrap'

function Homepage(props) {
    const[user,setUser]=useState({
        /* profileimg:"", name:"",contact:"", email:"", password:""});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)


    const handleInputs=(e)=>{
        const{name,value}=e.target;
        setUser({...user, [name]:value});
    };


    return (
        <Container fluid >
            <Row className='Intro'>
                <Col md={5} className="Tagline">
                    Is your way Chef's Way?
                    <pre >
                        <p style={{fontSize:"30px", color:"whitesmoke"}}>Exchange your recipes here...<br/>
                        Good Food, Good Mood!!!</p>
                        <Button variant='warning' onClick={handleShow}>Register</Button>
                       </pre>
                </Col>
                <Col md={7} style={{marginTop:"100px"}}><Image src={logo}></Image> </Col>

            </Row>
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
        <Stack  style={{textAlign:"center"}}>
            <Image id='post' src={food1}></Image>
            <Image id='post' src={food2}></Image>
            <Image id='post' src={food3}></Image>
        </Stack>
                
        
        </Container>
        
    );
}

export default Homepage; */

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NavigationBar from '../NavigationBar';

import './Homepage.css';

function Homepage(props) {
    return (
        <Container fluid className='backmost'>
            <div id='horiz' />
            <Container md={6}  className='main'>
                <NavigationBar />
            </Container>
            

        </Container>
           
    );
}

export default Homepage;