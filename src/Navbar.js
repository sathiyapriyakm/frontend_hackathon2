import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import search from './assets/search-solid.svg';
import './Navbar.css';

export const Navbar = () => {

  // const dispatch = useDispatch()
  // const navigate = useNavigate();

  // var User = useSelector((state) => (state.currentUserReducer))

  // const handleLogout = () =>{
  //   dispatch({ type: 'LOGOUT'});
  //   navigate('/');
  //   dispatch(setCurrentUser(null))
  // }

  // useEffect(() => {
  //   const token = User?.token
  //   if(token){
  //     const decodedToken = decode(token)
  //     if(decodedToken.exp * 1000 < new Date().getTime()){
  //       handleLogout();
  //     }
  //   }
  //   dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
  // },[dispatch])

  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt="logo" />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type="text" placeholder='Search...'/>
                <img src={search} alt="" width="18" className='search-icon'/>
            </form>
            <><Link to='/Login'  className='nav-item nav-links' >Log out</Link>
            </>
        </div>
    </nav>
  )
}
