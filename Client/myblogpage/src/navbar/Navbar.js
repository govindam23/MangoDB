import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="mnav">
      <div className="navlogo">
        <i className="nacicon fa-sharp fa-solid fa-m fa-bounce fa-xl"></i>
        <i className="nacicon fa-sharp fa-solid fa-g fa-bounce fa-xl"></i>
      </div>
      <div className="navcontent">
        <ul className="navlist">
          <li className="navitem">
            <Link to ="/" style ={{textDecoration:"none",color:"inherit" }} >Home</Link> </li>
          <li className="navitem">About</li>
          <li className="navitem"><Link to ="/newpost" style ={{textDecoration:"none",color:"inherit" }}>New Post</Link></li>
        </ul>
      </div>
      <div className="navprofile">
        <img
          className="navimg"
          src="https://images6.alphacoders.com/132/1322318.jpeg"
          alt="myprofile"
        ></img>
        <ul className="navlist">
            <li className="navitem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navitem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        
       

      </div>
    </div>
  );
}

export default Navbar;
