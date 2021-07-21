import React from "react";
import ProlioNavbar from "../Navbar/Navbar";
import Post from "../Post/Post";
import "./Home.css";

import { v4 as uuidv4 } from "uuid";
import postPic from "../postBackground.png";
import person from "../person.png";


const pulledData1 = {
    id: uuidv4(),
    username: "zanagen@yahoo.com",
    name: "Spongebob Squarepants",
    jobTitle: "3D artist",
    profilePicSrc: person,
    userStatus: "red",
    postPicSrc: postPic,
    postTitle: "3D animated new york city",
    postDate: "August 10, 2020" /* newDate() */,
    postDescription:
        "For the 3D designathon this weekend, my team created a 3-dimensional version on new york city to commemorate stuff.",
    postTags: ["AdobeXD", "Discord", "Slack", "OtherDesigns", "etc."],
    numLikes: 10
};

const pulledData2 = {
    id: uuidv4(),
    username: "user1@gmail.com",
    name: "Patrick Star",
    jobTitle: "3D animator",
    profilePicSrc: person,
    userStatus: "green",
    postPicSrc: postPic,
    postTitle: "New 3D Movie",
    postDate: "July 16, 2021",
    postDescription: "Finished working on a new 3D movie at XXX.",
    postTags: ["3D-Art", "Art", "WorkingFromHome"],
    numLikes: 50
};


function Home() {
    return (
        <div className="homePageContainer">
            <ProlioNavbar />
            <div className="columns">
                <div className="homeSideBar">
                </div>
                <div className="homeMainBar">
                    <Post {...pulledData1}/>
                    <Post {...pulledData2}/>
                    <Post />
                </div>
            </div>
        </div>
        
      );
    }
    
export default Home;