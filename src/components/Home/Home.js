import React from "react";
import { v4 as uuidv4 } from "uuid";

import ProlioNavbar from "../Navbar/Navbar";
import Post from "../Post/Post";
import "./Home.css";
import TagGeneration from "../TagGeneration/TagGeneration";

import postPic from "../postBackground.png";
import person from "../person.png";

// .toDateString() --> Wed Jul 21 2021 --> USE THIS WHEN GENERATING NEW POSTS!!!

const post1 = {
    id: uuidv4(),
    username: "zanagen@yahoo.com",
    name: "Spongebob Squarepants",
    jobTitle: "3D artist",
    profilePicSrc: person,
    userStatus: "red",
    postPicSrc: postPic,
    postTitle: "3D animated new york city",
    postDate: "Wed Jul 21 2021",
    postDescription:
        "For the 3D designathon this weekend, my team created a 3-dimensional version on new york city to commemorate stuff.",
    postTags: ["AdobeXD", "Discord", "Slack", "WorkingFromHome"],
    numLikes: 10
};

const post2 = {
    id: uuidv4(),
    username: "user1@gmail.com",
    name: "Patrick Star",
    jobTitle: "3D animator",
    profilePicSrc: person,
    userStatus: "green",
    postPicSrc: postPic,
    postTitle: "New Movie",
    postDate: "Mon Mar 22 2021",
    postDescription: "Finished working on a new 3D movie at XXX.",
    postTags: ["3D-Art", "2D-Art", "Art", "WorkingFromHome"],
    numLikes: 50
};

const post3 = {
    id: uuidv4(),
    username: "user55@gmail.com",
    name: "Squidward Tentacles",
    jobTitle: "Supporting Artist",
    profilePicSrc: person,
    userStatus: "gray",
    postPicSrc: postPic,
    postTitle: "anime",
    postDate: "Fri Dec 5 2019",
    postDescription: "Finished support on Anime.",
    postTags: ["2D-Art", "Art", "Contractor", "WorkingFromHome"],
    numLikes: 2
};

const popularTags = ["WorkingFromHome", "Art", "2D-Art"];

function Home() {
    return (
        <div className="homePageContainer">
            <ProlioNavbar />
            <div className="columns">
                <div className="homeSideBar">
                    <div className="homeFeaturedCreators">
                        <p>hello world</p>
                    </div>
                    <TagGeneration tags={popularTags} containerName="homePopularTags" />
                </div>
                <div className="homeMainBar">
                    <Post {...post1}/>
                    <Post {...post2}/>
                    <Post {...post3}/>
                </div>
            </div>
        </div>
    );
}
    
export default Home;