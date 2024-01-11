import React, { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../Context/Context";
const CommentForm = ({ onCommentSubmit }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [Comments, setComments] = useState("");
  const [postid, setpostid] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComments = {
      username: "Monica",
      Comments,
      postid: "6538a57cd4321c425e359673",
    };
    if (author && text) {
      onCommentSubmit({ author, text });
      setAuthor("");
      setText("");
    }
    try {
      const res = await axios.post("/Comments", newComments);
      window.location.replace("/Comments/" + res.data._id);
    } catch (err) {}
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Add your comment"
        value={text}
        onChange={(e) => setComments(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
