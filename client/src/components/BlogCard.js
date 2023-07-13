import React from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Container } from 'react-bootstrap';
import { MdDelete,MdEditNote } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const BlogCard = ( { title, description, image, time, username, id, isUser } ) => {
  
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/blog-details/${id}`);
  }

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
      if (data?.success) {
        toast.success("Blog Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div style={{backgroundColor:"rgb(248 250 252)", overflowY:"hidden"}}>
    
    <Container className='d-flex flex-column w-100 justify-content-center pt-5 mt-4 '>
 
    <Card className='mb-2'>
        <Card.Img className="img-fluid" variant="top" src={image}
        style={{width:"100",
        height: "60vh",
        objectFit: "cover",
        }
        }/>
        {isUser && (
        <Container className="d-flex justify-content-end">
          <button type="button" class="btn btn-dark m-1" onClick={handleEdit}>Edit Blog <MdEditNote style={{fontSize:"1.5rem"}}/></button>
          <button type="button" class="btn btn-danger m-1" onClick={handleDelete}>Delete Blog <MdDelete style={{fontSize:"1.5rem"}}/></button>
        </Container>
      )}
        <Card.Body>
        <Card.Text style={{fontWeight:"bold"}}> <FaUserEdit style={{paddingBottom:"6px", fontSize:"1.5rem"}}/> {username} </Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text style={{fontWeight:"bold"}}>Published on : {time.slice(0,10)}</Card.Text>
        </Card.Body>
      </Card>

      </Container>


    </div>
  )
}

export default BlogCard