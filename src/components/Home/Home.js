import React from "react";
import ProlioNavbar from "../Navbar/Navbar";
import "./Home.css";
import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";

export default function Home() {
    return (
      <>
          <ProlioNavbar />
          <div className="appContainer">
           <div className="header">
            <h2>Hello World</h2>
          </div>
      
          {/* <div className="columns">
            <div className="column">
              <span>1</span>
             </div> */}
          <div className="borderForCol2" />
            <div className="column">
              <NewPost />
              <Post />
              <Post />
              <Post />
             </div>
           {/* </div> */}
           </div>
           </>
      );
    }
    