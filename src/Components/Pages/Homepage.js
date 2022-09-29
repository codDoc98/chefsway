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
import { Button, Carousel, Container, Form, Modal,  } from 'react-bootstrap';
import './Homepage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Homepage(props) {

    let navigate=useNavigate();

    const[user,setUser]=useState({/* profileimg:"",*/ name:"",gender:"", email:"", password:"",dob:"",isChef:""});
    const[member,setMember]=useState({ email:"", password:""});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    const handleSignup = () => setSignup(!signup)
    const [signup,setSignup]=useState(true);


    const handleInputs=(e)=>{
        const{name,value}=e.target;
        setUser({...user, [name]:value});
    };
    const handleInput=(e)=>{
        const{name,value}=e.target;
        setMember({...member, [name]:value});
    };

    const onSubmit=async(e)=>{
      const res= await axios.post("http://localhost:8080/user",user);
      if(Object.keys(res.data).length>0){
        let result=JSON.stringify(res.data);
        result=result.replace("{","");
        result=result.replace("}","");
        result=result.replaceAll("\"","");
        result=result.replaceAll(",","\n");
        return alert(result);
        
      }
      else{
        handleClose();
      }      
    }
    const signin=async(e)=>{
      //const res= await axios.get("http://localhost:8080/user",user);
         
    }




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
                <p>The staple diet of every Indian Household.</p>
                <Button variant='warning' onClick={handleShow}>Register</Button>
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
                <h3>Aloo Masala Sandwich</h3>
                <p>Breakfast in Bed or Aloo in Bread? Pick one.</p>
                <Button variant='warning' onClick={handleShow}>Register</Button>
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
                <p>Restaurant's must in menu "PANEER"</p>
                <Button variant='warning' onClick={handleShow}>Register</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>


          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <div>
            {signup ?
            <Modal.Body>
              <Form >
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name<span style={{color:"red"}}>*</span></Form.Label>
                  <Form.Control required name='name' value={user.name}  onChange={handleInputs} type="text" placeholder="Enter your name" />
                </Form.Group>                
                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email<span style={{color:"red"}}>*</span></Form.Label>
                  <Form.Control required name="email" value={user.email} onChange={handleInputs} type="email" placeholder="Enter email" />
                  <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridPassword">
                  <Form.Label>Password<span style={{color:"red"}}>*</span></Form.Label>
                  <Form.Control required name="password" value={user.password} onChange={handleInputs} type="password" placeholder="Password" />
                  <Form.Control.Feedback type="invalid">
                  Please provide a valid password.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="dob">
                  <Form.Label>D.O.B.<span style={{color:"red"}}>*</span></Form.Label>
                  <Form.Control required name="dob" value={user.dob} onChange={handleInputs} type="date"  />
                  <Form.Control.Feedback type="invalid">
                  Please provide your date of birth.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group  className="mb-3" controlId="gender">
                  <Form.Label>Gender</Form.Label>
                    <div key={`inline-radio`} className="mb-3">
                      <Form.Check
                        inline
                        required
                        label="Female"
                        name="gender"
                        type="radio"
                        value="female"
                        id={`inline-radio-1`}
                      />
                      <Form.Check
                        inline
                        label="Male"
                        value="male"
                        name="gender"
                        type="radio"
                        id={`inline-radio-2`}
                      />
                      <Form.Check
                        inline
                        label="Others"
                        value="others"
                        name="gender"
                        type="radio"
                        id={`inline-radio-3`}
                      />
                    </div>
                  <Form.Control.Feedback type="invalid">
                  Choose one
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group required className="mb-3" name="isChef" controlId="isChef">
                  <Form.Label>Are you a chef?<span style={{color:"red"}}>*</span></Form.Label>
                    <div key={`inline-radio`} className="mb-3">
                      <Form.Check
                        inline
                        required
                        label="Yes"
                        name="isChef"
                        type="radio"
                        value="Yes"
                        id={`inline-radio-4`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        value="No"
                        name="isChef"
                        type="radio"
                        id={`inline-radio-5`}
                      />
                    </div>
                  <Form.Control.Feedback type="invalid">
                  Choose one
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary"  onClick={(e)=>{onSubmit(e);} }  type="submit">Sign Up</Button>
                <Button variant="light" style={{marginLeft:"5px"}}  onClick={handleSignup }  type="submit">Sign In</Button>
              </Form>
            </Modal.Body>
            :
            <Modal.Body>
              <Form >       
                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control required name="email" value={member.email} onChange={handleInput} type="email" placeholder="Enter email" />
                  <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control required name="password" value={member.password} onChange={handleInput} type="password" placeholder="Password" />
                  <Form.Control.Feedback type="invalid">
                  Please provide a valid password.
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary"  onClick={(e)=>{signin(e);} }  type="submit">Sign In</Button>
                <Button variant="light" style={{marginLeft:"5px"}} onClick={handleSignup }  type="submit">Sign Up</Button>
              </Form>
            </Modal.Body>
            } 
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>

        </Container>
        </>

    );
    
}

export default Homepage;