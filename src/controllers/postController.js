
let posts = require("../data/posts");

// GET all posts
const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    count: posts.length,
    data: posts
  });
};

// GET a single post
const getPostById = (req, res) => {
  const post = posts.find(p => p.id === Number(req.params.id));

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found"
    });
  }

  res.status(200).json({
    success: true,
    data: post
  });
};

// CREATE a post
const createPost = (req, res) => {
  const { title, content, author, category } = req.body;

  if (!title || !content || !author || !category) {
    return res.status(400).json({
      success: false,
      message: "Please provide title, content, author and category"
    });
  }

  const newPost = {
    id: posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1,
    title,
    content,
    author,
    category
  };

  posts.push(newPost);

  res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: newPost
  });
};

// UPDATE a post
const updatePost = (req, res) => {
  const post = posts.find(p => p.id === Number(req.params.id));

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found"
    });
  }

  const { title, content, author, category } = req.body;

  if (!title || !content || !author || !category) {
    return res.status(400).json({
      success: false,
      message: "Please provide title, content, author and category"
    });
  }

  post.title = title;
  post.content = content;
  post.author = author;
  post.category = category;

  res.status(200).json({
    success: true,
    message: "Post updated successfully",
    data: post
  });
};

// DELETE a post
const deletePost = (req, res) => {
  const index = posts.findIndex(p => p.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Post not found"
    });
  }

  const deletedPost = posts.splice(index, 1)[0];

  res.status(200).json({
    success: true,
    message: "Post deleted successfully",
    data: deletedPost
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
