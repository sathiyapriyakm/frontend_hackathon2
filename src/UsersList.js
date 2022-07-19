import React from 'react'
import { User } from './User';
import './Userss.css';
import { useState } from 'react';
import { API } from './global';
import { useEffect } from 'react';

export const UsersList = () => {

  const [users,setUsers]=useState([]);
const getUserList=()=>{
  fetch(`${API}/getAllUsers`,{
    method:"GET",
  }
  )
  .then((data)=>(data.json()))
  .then((list)=>setUsers(list));
  }  
useEffect(()=>getUserList(),[]);

  
  return (
    <div className='user-list-container'>
      {
        users.map((user) => (
          <User user={user} key={user?._id} />
        ))
      }
    </div>
  )
}
