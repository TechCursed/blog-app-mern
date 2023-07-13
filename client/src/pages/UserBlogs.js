import React from 'react';
import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import axios from 'axios';
import LoadingSpinnerComponent from 'react-spinners-components';

const UserBlogs = () => {

  const [blogs, setBlogs] = useState([]);
  const [uname,setUname] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //GET USER BLOGS
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`//localhost:8080/api/v1/blog/user-blog/${id}`);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
        setUname(data?.userBlog.username);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);
  // console.log(blogs);

  if(isLoading)
  {
    return <div className='d-flex justify-content-center flex-column' style={{marginTop:"250px"}}>
      <h2 style={{textAlign:'center'}}>Please wait while we fetch your blogs..</h2>
      <LoadingSpinnerComponent type={ 'Spinner' } color={ 'black' } size={ '150px' } />
    </div>    
  }

  if(!isLoading && !blogs.length){
    return <div className='d-flex justify-content-center flex-column' style={{marginTop:"250px"}}>
      <h2 style={{textAlign:'center'}}>You didn't create any blogs yet.</h2>
    </div>  
  }
  
  return (
     
    <div>

     { 
        blogs.map((blog) => (
          <BlogCard
            id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={uname}
            time={blog.createdAt}
          />
        ))
        }

    </div>
  );
};

export default UserBlogs;