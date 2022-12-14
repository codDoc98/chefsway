//CRUD Post 
//navbar
import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../NavigationBar';
import logo from '../../images/logo.png';
import './Homepage.css';

function Feed(props) {
    return (
        <>
        <Container fluid className='backmost'>
            <div id='horiz' />
        </Container>
        <Container md={6}  className='main'>
        <img src ={logo} alt="Chef'sWay" id="logo" />

                <NavigationBar />
                
        </Container> 
        </>
    );
}

export default Feed;