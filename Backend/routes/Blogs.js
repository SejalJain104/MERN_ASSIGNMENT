const express = require("express");
const Blog = require("../model/Blogs");

const router = express.Router();

async function handleFetchBlogById(req, res) {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching blog", error: error.message });
  }
}

async function handleFetchAllBlogs(req, res) {
    try {
      const blogs = await Blog.find();
      if (blogs) {
        res.status(200).json(blogs);
      } else {
        res.status(404).json({ message: "Blogs not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching blogs", error: error.message });
    }
  }
  

async function handleCreateBlog(req, res) {
  const { title, content, author } = req.body;
  console.log(req.body);
  try {
    const newBlog = await Blog.create({ title, content, author });

    res.status(200).json(newBlog);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error Creating blog", error: error.error });
  }
}

async function handleUpdateBlog(req, res) {
    const id = req.params.id;
    const body = req.body;
    try {
      const blog = await Blog.findByIdAndUpdate(id,body,{new:true});
      if (blog) {
        res.status(200).json(blog);
      } else {
        res.status(404).json({ message: "Blog not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching blog", error: error.message });
    }
}

async function handleDeleteBlog(req, res) {
    const id = req.params.id;
    try {
      const blog = await Blog.findByIdAndDelete(id);
      if (blog) {
        res.status(200).json(blog);
      } else {
        res.status(404).json({ message: "Blog not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching blog", error: error.message });
    }
}

router.get("/blogs", handleFetchAllBlogs);
router.get("/blogs/:id", handleFetchBlogById);
router.post("/blogs", handleCreateBlog);
router.put('/blogs/:id',handleUpdateBlog);
router.delete('/blogs/:id',handleDeleteBlog);

module.exports = router;
