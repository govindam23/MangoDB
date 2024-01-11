const router = require("express").Router();
const User = require("../models/User");
const Comment = require("../models/Comments");

//CREATE POST
router.post("/", async (req, res) => {
  const newComments = new Comment(req.body);
  try {
    const saveComent = await newComments.save();
    res.status(200).json(saveComent);
    console.log(saveComent);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;