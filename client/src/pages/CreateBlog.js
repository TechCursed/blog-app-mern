import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Container, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const CreateBlog = () => {

    const id = localStorage.getItem("userId");
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
      title:"",
      description:"",
      image:""
    });

    // input change
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
        const { data } = await axios.post('/api/v1/blog/create-blog', {
          title: inputs.title,
          description: inputs.description,
          image: inputs.image,
          user: id,
        });

        if(data?.success){
          toast.success("blog created");
          navigate('/my-blogs')
        }
      } catch (error) {
        console.log(error)
      }
    }
    
    // console.log(inputs)

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

             <Button variant="dark w-100 mt-4" type="submit"> Publish Blog </Button>

          </Form>
          </Container>
        </div>
    )

}

export default CreateBlog;
















      // try {
      //   const { data } = await axios.post("/api/v1/blog/create-blog", {
      //     title: inputs.title,
      //     description: inputs.description,
      //     image: inputs.image,
      //     user: id,
      //   });
      //   if (data?.success) {
      //     toast.success("Blog Created");
      //     navigate("/my-blogs");
      //   }
      // } catch (error) {
      //   console.log(error);
      // }