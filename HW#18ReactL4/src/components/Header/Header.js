
import React, { Component, useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
	function Header(){

  	useEffect(()=>{},[])

  	//using setState HOOK
  	const [item, setItem] = useState({});

    const navStyle = {
      color:'white'
    }


  	return (
      <nav>
        <ul className='nav-links'>
          <Link style={navStyle} to='/'>
            <li>Home</li>
          </Link>

          <Link style={navStyle} to='/contacts'>
            <li>Contacts</li>
          </Link>
          <Link style={navStyle} to='/gallery'>
            <li>Gallery</li>
          </Link>
          <Link style={navStyle} to='/posts'>
            <li>Posts</li>
          </Link>
        </ul>
      </nav>
    			);
			}

			export default Header;

        