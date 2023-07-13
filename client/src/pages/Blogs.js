import axios from 'axios';
import React from 'react';
import { useState , useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import LoadingSpinnerComponent from 'react-spinners-components';

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //GET ALL BLOGS
  const getAllBlogs = async() => {

    try{
       const { data } = await axios.get('//localhost:8080/api/v1/blog/all-blog');
       if(data?.success){
        setBlogs(data?.blogs);
        setIsLoading(false);
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

  if(isLoading){

    return <div className='d-flex justify-content-center flex-column' style={{marginTop:"250px"}}>
      <h2 style={{textAlign:'center'}}>Please wait while we load blogs for you..</h2>
      <LoadingSpinnerComponent type={ 'Spinner' } color={ 'black' } size={ '150px' } />
    </div>
   }

  return (
    <div>
      {
         blogs && blogs.map((blog) => {
         return <BlogCard
            id={blog._id}
            isUser={localStorage.getItem("userId")===blog.user._id}
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