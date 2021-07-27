import React, {useState} from "react";
import ProlioNavbar from "../Navbar/Navbar";
import Profile from "../MyProfile/Profile";
import icon from "../person.png";

import "./MyProfile.css";

// THIS IS MY PROFILE


const user1 = {
    userID: "3592085634-76-34",
    name: "Dande Cat",
    jobTitle: "Web Developer",
    profilePicSrc: icon, /* CHECK IF ICON NEEDS CURLY BRACKETS AROUND IT */
    userStatus: "green",
    profileTags: ["cat", "HTML", "Javascript", "Web Design"]
  };

// props = data passed into MyProfile, all data is undefined
export default function MyProfile() {
    return (
        <div id="profile">

            <ProlioNavbar />

            <Profile {...user1}/>


        </div>
    );
}