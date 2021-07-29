import React from "react";
import { v4 as uuidv4 } from "uuid";

import ProlioNavbar from "../Navbar/Navbar";
import Post from "../Post/Post";
import "./Home.css";
import TagGeneration from "../TagGeneration/TagGeneration";
import ProfileTagGeneration from "../ProfileTagGeneration/ProfileTagGeneration";
import NewPost from "../NewPost/NewPost";
import firebase from "../../firebase";

import postPic from "../postBackground.png";
import person from "../person.png";

// .toDateString() --> Wed Jul 21 2021 --> USE THIS WHEN GENERATING NEW POSTS!!!



const post1 = {
    id: uuidv4(),
    username: "zanagen@yahoo.com",
    name: "Spongebob Squarepants",
    jobTitle: "Fry cook",
    profilePicSrc: person,
    userStatus: "red",
    postPicSrc: postPic,
    postTitle: "Super Spatula Prototype",
    postDate: "Wed Jul 21 2021",
    postDescription:
        "Designing a Super Spatula to make my fry cooking skillzzz even better!",
    postTags: ["Fry-cook", "Spatula-Designs", "Krusty-Krab", "Food"],
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
    postDate: "Thu Jul 29 2021",
    postDescription: "Finished working on a new 3D movie from home.",
    postTags: ["3D-Art", "2D-Art", "Art", "WorkingFromHome"],
    numLikes: 50
};

const post3 = {
    id: uuidv4(),
    username: "user55@gmail.com",
    name: "Squidward Tentacles",
    jobTitle: "Cashier",
    profilePicSrc: person,
    userStatus: "gray",
    postPicSrc: postPic,
    postTitle: "Krusty Krab Restaurant",
    postDate: "Fri Dec 5 2019",
    postDescription: "I started a new job while waiting to become a clarinet sensation.",
    postTags: ["Krusty-Krab", "Cashier", "Food", "Hamburgers"],
    numLikes: 2
};

const popularTags = [
    "Krusty-Krab",
    "Food",
    "WorkingFromHome",
    "Art",
    "2D-Art",
    "3D-Art",
    "Contractor",
    "AdobeXD",
    "Discord",
    "Slack",
    "OtherDesigns",
];

const popularUsers = [
    {
        username: "zanagen@yahoo.com",
        name: "Spongebob Squarepants",
        jobTitle: "Fry cook",
        profilePicSrc: person,
        userStatus: "red"
    },
    {
        username: "user1@gmail.com",
        name: "Patrick Star",
        jobTitle: "3D animator",
        profilePicSrc: person,
        userStatus: "green"
    },
    {
        username: "user55@gmail.com",
        name: "Squidward Tentacles",
        jobTitle: "Cashier",
        profilePicSrc: person,
        userStatus: "gray"
    }
];

function Home() {
    const currentUserID = firebase.auth().currentUser.uid; //get the current logged in files user's uid
    return (
        <div className="homePageContainer">
            <ProlioNavbar />
            <div className="columns">
                <div className="homeSideBar">
                    <div className="homeFeaturedCreators">
                        <span className="homeSideBarText">My Connections</span>
                        <ProfileTagGeneration profileTags={popularUsers} />
                    </div>
                    <div className="homeSideBarBreak"></div>
                    <div className="homePopularTagsContainer">
                        <span className="homeSideBarText">Popular Tags</span>
                        <TagGeneration tags={popularTags} containerName="homePopularTags" />
                    </div>
                </div>
                <div className="homeMainBar">
                    {/* {currentUserID} */}
                    <NewPost />
                    <Post {...post1}/>
                    <Post {...post2}/>
                    <Post {...post3}/>
                </div>
            </div>
        </div>
    );
}
    
export default Home;