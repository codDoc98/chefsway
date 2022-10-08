//CRUD Post 
//navbar
import React from 'react';
import { Container } from 'react-bootstrap';
import './Feed.css';
import { Link } from 'react-router-dom';

import CreatePost from '../CreatePost';




function MyPost() {
  return (
    <Container className='feed-container' >
      <Link className="btn btn-oitline-light" to="/CreatePost">Add post</Link>
    <CreatePost/>
</Container>

   

  )
}

export default MyPost




