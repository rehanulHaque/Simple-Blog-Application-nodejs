const router = require("express").Router();
const Blog = require("../models/Blog");

router.get("/create", (req, res)=>{
  res.render('create')
})

//  Create Blog Login Required
router.post("/create", async (req, res) => {
  try {
    const body = {
      title: req.body.title,
      description: req.body.description
    };
    const blog = await Blog.create(body);
    // res.send(blog)
    res.redirect("/")
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server Error");
  }
});

//  Get all blog login required
router.get("/", async (req, res) => {
  try {
    const blog = await Blog.find();
    res.render("index", {blog: blog})
    // res.send(blog)
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server Error");
  }
});

//  Get ONe Blog login Required
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.find({_id: req.params.id });
    // res.send(blog);
    res.render("blog", {blog: blog})
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server Error");
  }
});

router.get("/edit/:id", async(req, res)=>{
  const blog = await Blog.findById(req.params.id)
  res.render("edit", {blog: blog})
})

//  Edit Blog auth required
router.post("/edit/:id", async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true})
    // res.send(blog);
    res.redirect('/')
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server Error");
  }
});

//  Delete blog
router.get("/delete/:id", async (req, res) => {
  try {
    await Blog.findOneAndDelete({
      _id: req.params.id,
    });
    res.redirect("/")
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server Error");
  }
});
module.exports = router;
