import { useEffect, useState } from "react";
import '../Home/home.css'
import Header from '../header/Header'
import Post from '../Post/Post'
import axios from "axios";
import { useLocation } from "react-router";


function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div>
        <Header />
    <div className="home">
    <Post posts={posts} />
    </div>
    </div>
  )
}

export default Home