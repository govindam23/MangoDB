import "../Details/detail.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";

function Detail() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});


  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: "Monika" },
      });
      window.location.replace("/");
    } catch (err) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: "Monika",
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  return (
    <div className="details">
      <div className="detail__header">
        <img
          className="detail__img"
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697932800&semt=sph"
          alt="img"
        />

        <h1 className="detail__title">
          {post.title}
          <div className="detail__Edit">
            <i
              className="editIcon fas fa-edit"
              onClick={() => setUpdateMode(true)}
            ></i>
            <i className="editIcon fas fa-trash" onClick={handleDelete}></i>
          </div>
        </h1>

        <div className="detail__Info">
          <span className="detail__Author">
            Author: <b>{post.username}</b>
          </span>
          <span className="detail__Date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
      </div>
      <div className="detail__body">
        <p
          className="
        detail__content"
        >
          {post.desc}
        </p>
      </div>
      <div className="comment-section">
        <h2>Comments</h2>

        <form onSubmit={handleCommentSubmit}>
          <textarea
            placeholder="Add your comment here"
            value={newComment}
            onChange={handleCommentChange}
          />
          <button type="submit">Submit</button>
        </form>

        <div className="comment-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;
