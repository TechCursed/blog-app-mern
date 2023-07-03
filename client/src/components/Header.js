import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const Header = () => {
      //accessing global login state
      const isLogin = useSelector((state) => state.isLogin)
      console.log(isLogin);
      //state
      const [value, setValue] = useState();
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">MERN Blog App</Navbar.Brand>
        {
          // "All Blogs" and "My Blogs" are avaialable only if isLogin is true
          isLogin && (
            <div>
           <Link to="/login" style={{ textDecoration: 'none', color:'black', margin:'5px'}}>All Blogs</Link>
           <Link to="/login" style={{ textDecoration: 'none', color:'black', margin:'5px'}}>My Blogs</Link>
            </div>
          )
        }
  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            {
              !isLogin && (
                <>
                <Link to="/login" style={{ textDecoration: 'none', color:'black', fontSize:'1.5rem', margin:'5px'}}>Login</Link>
                <Link to="/register" style={{ textDecoration: 'none', color:'black', fontSize:'1.5rem',margin:'5px'}}>Register</Link>                
                </>
              )
            }
            {
              isLogin && (
                <Link to="/logout" style={{ textDecoration: 'none', color:'black', fontSize:'1.5rem',margin:'5px'}}>Logout</Link>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header