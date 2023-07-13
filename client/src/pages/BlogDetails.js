import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

  const BlogDetails = () => {

  const [blog, setBlog] = useState({});
  const blogid = useParams().id;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  // FETCH BLOG DETAILS
  const getBlogDetail = async () => {
    try {
        const { data } = await axios.get(`//localhost:8080/api/v1/blog/get-blog/${blogid}`);
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data?.blog.title,
          description: data?.blog.description,
          image: data?.blog.image,
          id: data?.blog.user
        }

        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogDetail();
  }, [blogid]);

  console.log(blog)

  // INPUT CHANGE
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`//localhost:8080/api/v1/blog/update-blog/${blogid}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: inputs.id,
      });
      if (data?.success) {
        toast.success("Blog Updated");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='d-flex justify-content-center flex-column' style={{marginTop:"100px"}}>
    <Container>
    <h1 className="mb-4"> Create your own blog</h1>

    <Form onSubmit={handleSubmit} >

    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Title</Form.Label>
        <Form.Control 
              type="text" 
              name ="title"
              placeholder="Enter blog title" 
              value={inputs.title}
              onChange={handleChange}
              required
              />
       </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={10} 
          name = "description"
          placeholder="Enter blog description" 
          value={inputs.description}
          onChange={handleChange}
          required
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Image URL</Form.Label>
        <Form.Control 
              type="text" 
              name ="image"
              placeholder="Enter image url" 
              value={inputs.image}
              onChange={handleChange}
              required
              />
       </Form.Group>

       <Button variant="dark w-100 mt-4" type="submit"> UPDATE BLOG </Button>

    </Form>
    </Container>
  </div>
  );
};

export default BlogDetails;