 const mongoose = require('mongoose');
 const blogModel = require('../models/blogModel');
 const userModel = require('../models/userModel');

//GET || FETCH ALL BLOGS
exports.getAllBlogsController = async (req,res) => {
   try{
    const blogs = await blogModel.find({})
    if(!blogs) {
        return res.status(200).send({
            success: false,
            message: "No blogs found"
        })
    }
    return res.status(200).send({
        success: true,
        blogCount: blogs.length,
        message: "All blogs fetched",
        blogs,
    })
   }
   catch(error){
    console.log(error);
    return res.status(500).send({
        success: false,
        message: "Error getting blogs",
        error
    })
   }
}

//POST || CREATE BLOG
exports.createBlogController = async (req,res) => {
    try{
      const {title, description, image, user} = req.body;
      //VALIDATION
      if(!title || !description || !image || !user){
        return res.status(400).send({
            success: false,
            message: "Please provide all fields"
        })
      }
      const existingUser = await userModel.findById(user);
      //validation
      if(!existingUser){
         res.status(404).send({
          success: false,
          message: "unable to find user"
         })
      }

      const newBlog = new blogModel({ title, description, image, user });
      const session = await mongoose.startSession();
      session.startTransaction();
      await newBlog.save({ session });
      exisitingUser.blogs.push(newBlog);
      await exisitingUser.save({ session });
      await session.commitTransaction();
      await newBlog.save();
      return res.status(201).send({
        success: true,
        message: "Blog Created!",
        newBlog,
      })
    }
    catch(error){
      console.log(error)
      return res.status(400).send({
        success: false,
        message: "Error while creating blog",
        error
      })
    }

} 

//PUT || UPDATE BLOG
exports.updateBlogController = async (req,res) => {
  try{
    const {id} = req.params;
    const {title,description,image} = req.body;
    const blog = await blogModel.findByIdAndUpdate(id,{...req.body}, {new:true})
    return res.status(200).send({
      success: true,
      message:"Blog updated",
      blog,  
    })
   }
   catch(error){
     console.log(error);
     return res.status(400).send({
      success: false,
      message: "Error updating the blog",
      error,
     })
   }
}

//GET || GET SINGLE BLOG DETAILS
exports.getBlogByIdController = async (req,res) => {
  try{
    const {id} = req.params;
    const blog = await blogModel.findById(id);
    if(!blog){
      return res.status(404).send({
        success: false,
        message:"no blog with given id found"
      })
    }
    return res.status(200).send({
      success: true,
      message: "blog fetched",
      blog
    })
  }
  catch(error){
    console.log(error)
    return res.status(400).send({
      success: false,
      message:"error getting single blog",
      error
    })
  }
} 

//DELETE || DELETE BLOG
exports.deleteBlogController = async(req,res) => {
  try{
     const blog = await blogModel
    .findByIdAndDelete(req.params.id)
    .populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();
    return res.status(200).send({
    success: true,
    message: "Blog Deleted!",
   })
  } 
  catch(error){
   console.log(error);
   return res.status(400).send({
    success: false,
    message:"error deleteing blog ",
    error,
   })
  }  
}
