//currentUser detail
//specific user url
//performs RUD operations
//navbar: mypost feed profile

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import './Profile.css';
import RateReviewIcon from '@mui/icons-material/RateReview';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import chefdecuisine from '../../images/chefkiss.png';
import souschef from '../../images/Sous-Chef.jpg';
import chefdepartie from '../../images/commis-chef.png';


function Profile(props) {
    const location = useLocation();
    const [ currentUser , setCurrentUser] = useState(location.state.currentUser);
    const {id,name,email,password,dob,isChef,gender}=currentUser;
    const [ischef, setIsChef]=useState(false);
    const [readonly, setReadOnly]=useState(true);
    const navigate=useNavigate();
    

    const checkChef=()=>{
      //console.log(currentUser)
      if(isChef==="yes")
        setIsChef(true);

      else
        setIsChef(false);
    }

    const handleInputs=(e)=>{
      const{name,value}=e.target;
      setCurrentUser({...currentUser, [name]:value});
  };

  const deleteAccount=async(e)=>{
    let res = await axios.delete(`http://localhost:8080/user/${id}`);
    navigate("/");
    res=JSON.stringify(res.data);
    return alert(res);
    
    

  }

  const onSave=async(e)=>{

    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`,currentUser);
    setReadOnly(true);

  }
   
    useEffect(()=>{
        checkChef();
    });



    return (
        <Container className='profile-container' >
             <Row className='cards' >
            <h2 style={{color:"gold", textShadow: "1px 1px 1px gold"}}>Golden Card indicates your Rank</h2>
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
            <Card id = "ranking" className={ischef?"chef":""} style={{ width: '14rem' }}>
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
            <Card id = "ranking" className={ischef?"":"chef"} style={{ width: '14rem' }}>
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
          {readonly?
          <icon>
          <RateReviewIcon
          color="success"
          fontSize="large"
          onClick={()=>{setReadOnly(!readonly)}}
          style={{float:"left", marginLeft:"15px"}} />
          <DeleteForeverIcon
          color="#fc0303"
          fontSize='large'
          style={{marginLeft:"10px"}}
          onClick={(e)=>{deleteAccount(e)}} />
          </icon>
          :
          <icon>
          <RateReviewIcon
          color="success"
          fontSize="large"
          onClick={()=>{setReadOnly(!readonly)}}
          style={{float:"left", marginLeft:"10px", pointer:"cursor"}} />
          <CancelIcon
          color="success"
          fontSize="large"
          onClick={()=>{setReadOnly(true)}}
          style={{float:"right", marginRight:"15px", pointer:"cursor"}} />
          </icon>
          }
         
          
          {readonly?
          <Row className='accountInfo'>   
            
              <Col mb-3>
            <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control  name='name' /* onSubmit={(e)=>{e.target.value=""}} */ value={name}   readOnly type="text"  />
                </Form.Group>   
                <Form.Group className="mb-3" controlId="dob">
                  <Form.Label>D.O.B.</Form.Label>
                  <Form.Control  name="dob" value={dob} readOnly type="date"  />
                </Form.Group> 
                <Form.Group className="mb-3" controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control  name="gender" value={gender} readOnly type="text"  />
                </Form.Group> 
                
                </Col>  
                <Col>       
                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control  name="email"  value={email} readOnly type="email"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control  name="password"  value={password} readOnly type="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ischef">
                  <Form.Label>Chef ?</Form.Label>
                  <Form.Control  name="isChef"  value={isChef} readOnly type="text" />
                </Form.Group>
                </Col> 
                </Row>
                :
                
                <Row className='accountInfo'>   
            
              <Col mb-3>
            <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control  name='name' /* onSubmit={(e)=>{e.target.value=""}} */ value={name}   onChange={handleInputs} type="text"  />
                </Form.Group>   
                <Form.Group className="mb-3" controlId="dob">
                  <Form.Label>D.O.B.</Form.Label>
                  <Form.Control  name="dob" value={dob} onChange={handleInputs} type="date"  />
                </Form.Group> 
                <Form.Group className="mb-3" controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control  name="gender" value={gender} onChange={handleInputs} type="text"  />
                </Form.Group> 
                
                </Col>  
                <Col>       
                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control  name="email"  value={email} onChange={handleInputs} type="email"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control  name="password"  value={currentUser.password} onChange={handleInputs} type="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ischef">
                  <Form.Label>Chef ?</Form.Label>
                  <Form.Control  name="isChef"  value={isChef} onChange={handleInputs} type="text" />
                </Form.Group>
                </Col> 
                <Row style={{width:"100%"}}>
                  <Button variant='success' onClick={(e)=>{onSave(e)}} style={{width:"100px", margin:"auto"}}>Save</Button>
                </Row>
                </Row>
                
          }
          
        </Container>
    );
}

export default Profile;
