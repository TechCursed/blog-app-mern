import React from 'react';
import { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {authActions} from '../redux/store';

const Login = () => {


  //state 
  const [inputs, setInputs] = useState({
    email:'',
    password:''
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
   setInputs((prevState) => ({
    ...prevState,
    [e.target.name]:e.target.value
   }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/login", {
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {        
        alert("User Login Successfully");
        //saving the id of the user in localstorage for getting/deleting/updating user blogs
        localStorage.setItem('userId', data?.user._id)        
        dispatch(authActions.login())
        navigate("/blogs");
      }
    } catch (error) {
      alert('wrong username or password')
      console.log(error);
    }
  };

  return (
    <Container>
    <Row className="vh-100 d-flex justify-content-center align-items-center">
      <Col md={8} lg={6} xs={12}>
        <div className="border border-3 border-primary"></div>
        <Card className="shadow">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <h2 className="fw-bold mb-2 text-uppercase ">Log In</h2>
              <p className=" mb-5">Please enter your email and password!</p>
              <div className="mb-3">
                <Form onSubmit={handleSubmit}>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Email
                    </Form.Label>
                    <Form.Control type="email" 
                    name ="email"
                    placeholder="Enter email" 
                    value={inputs.email}
                    onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                    name = "password"
                    placeholder="Password"
                    value={inputs.password} 
                    onChange={handleChange}
                    />
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Log In
                    </Button>
                  </div>
                </Form>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary fw-bold">
                    Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Login