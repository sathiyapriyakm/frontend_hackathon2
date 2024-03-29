import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import Globe from './assets/Globe.svg';

export const Sidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
          <NavLink to='/' className='side-nav-links ' activeClassName="active">
             <p>Home</p>
          </NavLink>
          <div className='side-nav-div'>
            <div><p>PUBLIC</p></div>
            <NavLink to='/Questionsbar' className='side-nav-links' activeClassName="active">
                <img src={Globe} alt="Globe" width="18px" style={{opacity: "0.7"}}/>
                <p style={{paddingLeft: "10px"}}>Questions</p>
            </NavLink>
            <NavLink to='/Tags' className='side-nav-links' activeClassName="active" style={{paddingLeft: "40px"}}>
                <p>Tags</p>
            </NavLink>
            <NavLink to='/Users' className='side-nav-links' activeClassName="active" style={{paddingLeft: "40px"}}>
                <p>Users</p>
            </NavLink>
          </div>
      </nav>
    </div>
  )
}