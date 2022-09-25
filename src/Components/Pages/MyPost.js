//CRUD Post 
//navbar
import React from 'react';
import { Container } from 'react-bootstrap';
import './Feed.css';

import CreatePost from '../CreatePost';




function MyPost() {
  return (
    <Container className='feed-container' >
    <CreatePost/>
</Container>
   

  )
}

export default MyPost




