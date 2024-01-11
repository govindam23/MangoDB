const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    Comments: {
      type: String,
      required: true,
    },
    postid: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comments", CommentsSchema);
