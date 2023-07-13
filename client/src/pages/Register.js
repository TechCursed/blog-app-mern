import React from 'react';
import { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {

  //STATE
  const [inputs, setInputs] = useState({
    name:'',
    email:'',
    password:''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
   setInputs((prevState) => ({
    ...prevState,
    [e.target.name]:e.target.value
   }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/register", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        toast.success("User Register Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{backgroundColor:"rgb(248 250 252)", overflowY:"hidden"}}>
    <Container>
    <Row className="vh-100 d-flex justify-content-center align-items-center pt-4">
      <Col md={8} lg={6} xs={12}>
        <div className="border border-3 border-primary"></div>
        <Card className="shadow">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <h2 className="fw-bold mb-2 text-uppercase ">Register</h2>
              <p className=" mb-5">Please enter your name, email and password!</p>
              <div className="mb-3">
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className="text-center">
                      name
                    </Form.Label>
                    <Form.Control type="text" 
                    name = "name"
                    placeholder="Enter name" 
                    value={inputs.name}
                    onChange={handleChange}
                    />
                  </Form.Group>

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
                      Sign Up
                    </Button>
                  </div>
                </Form>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary fw-bold">
                     Log In
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
  </div>
  )
}

export default Register