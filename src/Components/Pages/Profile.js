//user detail
//performs RUD operations
//navbar: mypost feed profile


// import axios from 'axios';
import React /* { useEffect, useState } */ from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './Feed.css';


function Profile(props) {
    const location = useLocation();
    const { currentUser } = location.state
    const user=JSON.stringify(currentUser)
    /* 
    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        //const result=await axios.get("http://localhost:8080/users");
        
        console.log(currentUser)


    };
 */

    return (
        <Container className='feed-container' >
            {user}
        </Container>
    );
}

export default Profile;
