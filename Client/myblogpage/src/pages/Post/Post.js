import React from "react";
import "../Post/post.css" ; 
import RowpostContainer from "../PostRowContainer/RowpostContainer";
function Post({ posts}) {
  return (
    <div className="post">  
{posts.map((p) => (
        <RowpostContainer post={p} />
      ))}
      
    </div>
  )
}

export default Post;
