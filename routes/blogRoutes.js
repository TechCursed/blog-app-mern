const express = require('express');
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController } = require('../controllers/blogController');

//router object
const router = express.Router();

//routes
//GET || FETCH ALL BLOGS
router.get('/all-blog', getAllBlogsController);

//POST || CREATE BLOG
router.post('/create-blog', createBlogController);

//PUT || UPDATE BLOG
router.put('/update-blog/:id', updateBlogController);

//GET || GET SINGLE BLOG DETAILS
router.get('/get-blog/:id', getBlogByIdController);

//DELETE || DELETE BLOG
router.delete('/delete-blog/:id', deleteBlogController);

module.exports = router; 