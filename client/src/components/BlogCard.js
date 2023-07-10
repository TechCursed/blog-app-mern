import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FiEdit } from "react-icons/fi";

const BlogCard = ( { title, description, image, time, username } ) => {

  return (
    <div>

    <Container className='d-flex flex-column w-100 justify-content-center mt-5 '>

    <Card className='mt-4'>
        <Card.Img variant="top" src={image}
        style={{width:"100",
        height: "60vh",
        objectFit: "cover",
        }
        }/>
        <Card.Body>
        <Card.Text>{username} <FiEdit /> </Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{time}</Card.Text>
        </Card.Body>
      </Card>
      </Container>


    </div>
  )
}

export default BlogCard