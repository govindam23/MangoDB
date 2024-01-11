import React from "react";
import "../PostRowContainer/rowpostContainer.css";
import { Link } from "react-router-dom";

function RowpostContainer({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="RowpostContainer">
      <img className="pImg" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697932800&semt=sph" alt="" />
      <div className="pContent">
        <div className="pCat">
        {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

export default RowpostContainer;
