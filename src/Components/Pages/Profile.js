//user detail
//specific user url
//performs RUD operations
//navbar: mypost feed profile


// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './Profile.css';

import chefdecuisine from '../../images/chefkiss.png';
import souschef from '../../images/Sous-Chef.jpg';
import chefdepartie from '../../images/commis-chef.png';


function Profile(props) {
    const location = useLocation();
    const { currentUser } = location.state
    const user=JSON.stringify(currentUser)
    const [isChef, setIsChef]=useState(false);

    const checkChef=()=>{
      console.log(currentUser);
      if(currentUser.isChef==="Yes")
        setIsChef(true);

      else
        setIsChef(false);
    }
   
    useEffect(()=>{
        checkChef();
    },[]);

    return (
        <Container className='profile-container' >
             <Row className='cards' >
            <h2>Your Chef Ranking</h2>
            <Card id = "ranking" style={{ width: '17.9rem' }} >
              <Card.Img variant="top" src={chefdecuisine} style={{ width: '17.7rem', height:'16rem' }} />
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
            <Card id = "ranking" className={isChef?"chef":""} style={{ width: '17.9rem' }}>
              <Card.Img variant="top" src={souschef} style={{ width: '17.7rem', height:'16rem' }} />
              <Card.Body>
                <Card.Title style={{fontWeight:"bold", textShadow:" 2px 2px 2px #aaa"}}>Sous Chef</Card.Title>
                <Card.Text>
                  Delicious and Exquisite is what I hear about your dishes.
                  You are a true chef for sure, the head chef competition has just spiced up more with your arrival.
                  The only ways to win here is by hook or by cook.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card id = "ranking" className={isChef?"":"chef"} style={{ width: '17.9rem' }}>
              <Card.Img variant="top" src={chefdepartie} style={{ width: '17.7rem', height:'16rem' }} />
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
        </Container>
    );
}

export default Profile;
