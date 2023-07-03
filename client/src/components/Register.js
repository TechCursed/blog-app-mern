import React from 'react';
import { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

const Register = () => {

  //state 
  const [inputs, setInputs] = useState({
    name:'',
    email:'',
    password:''
  })

  const handleChange = (e) => {
   setInputs((prevState) => ({
    ...prevState,
    [e.target.name]:e.target.value
   }))
  }

  const handleSubmit = (e) => {
   e.preventDefault();
   console.log(inputs);
  }

  return (
    <Container>
    <Row className="vh-100 d-flex justify-content-center align-items-center">
      <Col md={8} lg={6} xs={12}>
        <div className="border border-3 border-primary"></div>
        <Card className="shadow">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <h2 className="fw-bold mb-2 text-uppercase ">Register</h2>
              <p className=" mb-5">Please enter your username, email and password!</p>
              <div className="mb-3">
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className="text-center">
                      Username
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
                    <a href="/login" className="text-primary fw-bold">
                    Login
                    </a>
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

export default Register