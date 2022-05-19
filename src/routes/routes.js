const express = require('express');
const {createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog} = "../controllers/BlogController.js";

const router = express.Router();

router.get('/',getAllBlogs);
router.get('/:id',getBlog);
router.post('/',createBlog);
router.put('/:id',updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;