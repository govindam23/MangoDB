const router = require("express").Router();
const Comments = require("../models/Comments");

router.post("/", async (req, res) => {
  const newCom = new Comments(req.body);
  try {
    const savedCom = await newCom.save();
    res.status(200).json(savedCom);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
    try {
      const Coms = await Comegory.find();
      res.status(200).json(Coms);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;