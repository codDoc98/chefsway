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
import chefdecuisine from '../../images/chefkiss.png';
import souschef from '../../images/Sous-Chef.jpg';
import chefdepartie from '../../images/commis-chef.png';

import React, { useState } from 'react';
import { Button, Card, Carousel, Container, Form, Modal, Row,  } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Homepage.css';



function Homepage(props) {

    let navigate=useNavigate();

    const[user,setUser]=useState({/* profileimg:"",*/ name:"",gender:"", email:"", password:"",dob:"",isChef:false});
    const[member,setMember]=useState({ email:"", password:""});
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);

    };
    const handleShow = () => setShow(true)
    const handleSignup = () => setSignup(!signup)
    const [signup,setSignup]=useState(true);
    //const [emailExists,setEmailExists]=useState(false);


    const handleInputs=(e)=>{
        const{name,value}=e.target;
        setUser({...user, [name]:value});
    };
    const handleInput=(e)=>{
        const{name,value}=e.target;
        setMember({...member, [name]:value});
    };

    const onSubmit=async(e)=>{
      let email=false;
      const resp= await axios.get("http://localhost:8080/users",user);
      resp.data.forEach(element => {
        if((element.email)===(user.email)){
          email=true;
        }});
        if (email){
          return alert("Email Already Exists"); 
        }
         else{
          postIt();       
        };     
    }
    const postIt=async()=>{
          
      const res= await axios.post("http://localhost:8080/user",user);
      if(!((Object.keys(res.data)).includes("id"))){
        let result=JSON.stringify(res.data);
        result=result.replace("{","");
        result=result.replace("}","");
        result=result.replaceAll("\"","");
        result=result.replaceAll(",","\n");
        return alert(result);
      }
      else{
        handleClose();
        document.getElementsByClassName("input").innerHTML="";
        return alert("Sign-in to access your account");
        
      }  
    }  
    const signin=async(e)=>{
      e.preventDefault();
      const resp= await axios.get("http://localhost:8080/users",user);
      let emailExists=false;
      resp.data.forEach(element => {
        if((element.email)===(member.email) ){

          if((element.password)===(member.password))
          {
            emailExists=true;
            const email=element.email;
            navigate(`/${email}`,{state:{currentUser: element}})
            //<Profile element />
          }
          else
            return alert("Password Incorrect");
        }
      });
      if(!emailExists)
      return alert("Sign Up please");     
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



          <Row className='cards' >
            <h2>Chef Rankings</h2>
            <Card id = "ranking" style={{ width: '14rem' }} >
              <Card.Img variant="top" src={chefdecuisine} style={{ width: '13.9rem', height:'12rem' }} />
              <Card.Body>
                <Card.Title style={{fontWeight:"bold", textShadow:" 2px 2px 2px #aaa"}}>Chef De Cuisine</Card.Title>
                <Card.Text>
                  People are counting on you for recipes.
                  You have earned the most of chef's kisses.
                  CONGRATULATIONS!🎉 There's only one head chef and it's you.
                  Keep up the streak of chef's kiss to be here...
                </Card.Text>
              </Card.Body>
            </Card>
            <Card id = "ranking" style={{ width: '14rem' }}>
              <Card.Img variant="top" src={souschef} style={{ width: '13.9rem', height:'12rem' }} />
              <Card.Body>
                <Card.Title style={{fontWeight:"bold", textShadow:" 2px 2px 2px #aaa"}}>Sous Chef</Card.Title>
                <Card.Text>
                  Delicious and Exquisite is what I hear about your dishes.
                  You are a true chef for sure, the head chef competition has just spiced up more with your arrival.
                  The only ways to win here is by hook or by cook.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card id = "ranking" style={{ width: '14rem' }}>
              <Card.Img variant="top" src={chefdepartie} style={{ width: '13.9rem', height:'12rem' }} />
              <Card.Body>
                <Card.Title style={{fontWeight:"bold", textShadow:" 2px 2px 2px #aaa"}}>Chef De Partie</Card.Title>
                <Card.Text>
                  Toque Blanche and apron is your attire here.
                  Flavour is all that is talked about.
                  Kitchen is your destination.
                  Search your fav recipes and post the ones you excel in.
                  So, what are you cooking today?
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>


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
                  <Form.Control required name='name' /* onSubmit={(e)=>{e.target.value=""}} */ value={user.name}   onChange={handleInputs} type="text" placeholder="Enter your name" />
                </Form.Group>                
                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email<span style={{color:"red"}}>*</span></Form.Label>
                  <Form.Control required name="email" className='input' value={user.email} onChange={handleInputs} type="email" placeholder="Enter email" />
                  <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridPassword">
                  <Form.Label>Password<span style={{color:"red"}}>*</span></Form.Label>
                  <Form.Control required name="password" className='input' value={user.password} onChange={handleInputs} type="password" placeholder="Password" />
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
                <Form.Group  className="mb-3" controlId="gender" onChange={handleInputs}>
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
                <Form.Group required className="mb-3" name="isChef" controlId="isChef" onChange={handleInputs}>
                  <Form.Label>Are you a chef?<span style={{color:"red"}}>*</span></Form.Label>
                    <div key={`inline-radio`} className="mb-3">
                      <Form.Check
                        inline
                        required
                        label="Yes"
                        name="isChef"
                        type="radio"
                        value="yes"
                        id={`inline-radio-4`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        value="no"
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