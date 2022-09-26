//user detail
//performs RUD operations
//navbar: mypost feed profile


import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Profile(props) {

    const [user,setusers]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");
        console.log(result.data);
    };


    return (
        <div>
            
        </div>
    );
}

export default Profile;
