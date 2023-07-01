 const mongoose = require('mongoose');
 const blogModel = require('../models/blogModel')

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
      const {title, description, image} = req.body;
      //VALIDATION
      if(!title || !description || !image){
        return res.status(400).send({
            success: false,
            message: "Please provide all fields"
        })
      }
      const newBlog = new blogModel({title, description, image});
      await newBlog.save();
      return res.status(201).send({
          success: true,
          message: "Blog created"
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
 
} 

//DELETE || DELETE BLOG
exports.deleteBlogController = () => {
     
}
