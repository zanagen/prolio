import React, {useState} from "react";
import ProlioNavbar from "../Navbar/Navbar";
import firebase from '../../firebase';
import Profile from "../MyProfile/Profile";
import icon from "../person.png";
import { useAuth } from '../../contexts/AuthContext';

import "./MyProfile.css";

// THIS IS MY PROFILE


// const user1 = {
//     userID: "3592085634-76-34",
//     name: "Dande Cat",
//     jobTitle: "Web Developer",
//     profilePicSrc: icon, /* CHECK IF ICON NEEDS CURLY BRACKETS AROUND IT */
//     userStatus: "green",
//     profileTags: ["cat", "HTML", "Javascript", "Web Design"]
//   };

 //get the current logged in files user's uid
// const { currentUser } = useAuth()

// props = data passed into MyProfile, all data is undefined
export default function MyProfile() {
    const {currentUser} = useAuth()


    const myUser = {
      userID: currentUser.uid,
      name: currentUser.displayName,
      jobTitle: "Web Developer",
      profilePicSrc: icon, //currentUser.photoURL,
      userStatus: "green",
      profileTags: ["HTML", "CSS", "Javascript", "Web Design", "React", "Firebase-the-BEAST"]
  };
    return (
        <div id="profile">

            <ProlioNavbar />

            {/* <Profile {...user1}/> */}
            <Profile {...myUser}/>


        </div>
    );
}