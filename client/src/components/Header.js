import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { authActions } from '../redux/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { toast } from 'react-hot-toast';

const Header = () => {
      //accessing global login state
      const isLogin = useSelector((state) => state.isLogin)

      const navigate = useNavigate();
      const dispatch = useDispatch();

      // console.log(isLogin);
      //state
      const [value, setValue] = useState();

      const handleLogout = () => {
        try {
          dispatch(authActions.logout());
          toast.success("Logout Successfully");
          localStorage.clear();
          navigate("/login");
        } catch (error) {
          console.log(error);
        }
      };



  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="appnav shadow-sm fixed-top mb-4" >
      <Container>
        {/* <Navbar.Brand href="/"></Navbar.Brand> */}
        <Link to="/" style={{ textDecoration: 'none', color:'#010101', margin:'5px', fontSize:'1.5rem' }}>BLOG💯</Link>
        {
          // "All Blogs" and "My Blogs" are avaialable only if isLogin is true
          isLogin && (
            <div>
           <Link to="/blogs" style={{ textDecoration: 'none', color:'#010101', margin:'5px'}}>BLOGS</Link>
           <Link to="/my-blogs" style={{ textDecoration: 'none', color:'#010101', margin:'5px'}}>MY BLOGS</Link>
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
                <Link to="/register" style={{ textDecoration: 'none', color:'black', fontSize:'1.5rem',margin:'5px'}}>Register</Link>                
                <Link to="/login" style={{ textDecoration: 'none', color:'black', fontSize:'1.5rem', margin:'5px'}}>Login</Link>
                </>
              )
            }
            {
              isLogin && (
                <Link to="/login" style={{ textDecoration: 'none', color:'black', fontSize:'1.5rem',margin:'5px'}} onClick={handleLogout}>Logout</Link>
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