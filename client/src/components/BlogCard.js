import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { MdDelete,MdEditNote } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const BlogCard = ( { title, description, image, time, username, id, isUser } ) => {
  
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/blog-details/${id}`);
  }

  return (

    <div style={{backgroundColor:"rgb(248 250 252)", overflowY:"hidden"}}>

    <Container className='d-flex flex-column w-100 justify-content-center pt-5 '>
 
    <Card className='mt-4'>
        <Card.Img variant="top" src={image}
        style={{width:"100",
        height: "60vh",
        objectFit: "cover",
        }
        }/>
        {isUser && (
        <Container className="d-flex justify-content-end">
          <button type="button" class="btn btn-dark m-1" onClick={handleEdit}>Edit Blog <MdEditNote style={{fontSize:"1.5rem"}}/></button>
          <button type="button" class="btn btn-danger m-1">Delete Blog <MdDelete style={{fontSize:"1.5rem"}}/></button>
        </Container>
      )}
        <Card.Body>
        <Card.Text> <FaUserEdit style={{paddingBottom:"6px", fontSize:"1.5rem"}}/> {username} </Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{time.slice(0,10)}</Card.Text>
        </Card.Body>
      </Card>

      </Container>


    </div>
  )
}

export default BlogCard