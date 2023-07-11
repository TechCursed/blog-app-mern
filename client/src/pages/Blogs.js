import axios from 'axios';
import React from 'react';
import { useState , useEffect } from 'react';
import BlogCard from '../components/BlogCard';

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);

  //GET ALL BLOGS
  const getAllBlogs = async() => {

    try{
       const { data } = await axios.get('//localhost:8080/api/v1/blog/all-blog');
       if(data?.success){
        setBlogs(data?.blogs);
        console.log(data);
       }
    }
    catch(error){
       console.log(error);
    }
  }


  useEffect(() => {
    getAllBlogs();
  },[])
  

  return (
    <div>
      {
         blogs && blogs.map((blog) => {
         return <BlogCard
            // username = {blog.user.username}
            title={blog?.title}
            description={blog?.description}
            image={blog?.image}
            username={blog?.user?.username}
            time={blog.createdAt}
          />
         })
      }
      
      </div>
  )
}

export default Blogs