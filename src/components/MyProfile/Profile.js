import React, {useState} from "react";
import Tabs from "../Tabs/Tabs"; 

import "./MyProfile.css";
import TagGeneration from "../TagGeneration/TagGeneration";

// THIS IS MY PROFILE

// props = data passed into MyProfile, all data is undefined
export default function Profile(props) {
    let status; // declares a variable called status
    if (props.userStatus === "green") {
        status = "green";
    }
    else if (props.userStatus === "red") {
        status = "red";
    }
    else {
        status = "gray";
    }

    // creates variable tagList and method to update the variable called setTagList
    const [tagList, setTagList] = useState(props.profileTags); 

    return (
        <div id="profile">
            <div className="header_area">
                <div className="profile_info">
                    <div className="icon_container">
                        <div className="profileimg">
                            <img alt="Profile Pic" className="icon_circle" src={props.profilePicSrc} />
                        </div>

                        <div className={status}>

                        </div>
                    </div>

                    <div className="header_info">
                        <span id="profile_name">{props.name}</span> {/* first and last name */}
                        <div id="base_info">{props.jobTitle}</div> {/* job title; FUTURE OF WORK: username and location */}
                        {/*<div id="blurb">Profile content blurb </div>*/}
                        <div className="tag_container"> {/* MAY NOT NEED THIS DIV, WILL LOOK LATER */}
                            <TagGeneration tags={tagList} containerName="tag_container" />
                        </div>
                    </div>
                </div>

                <div className="button_container">
                        {/*<Button content="Hi" />*/}
                </div>
            </div>

            <Tabs>
                <div label="Projects">
                    Project Posts will go here! We need to populate this. </div>
                <div label="Skills">
                    The user's most-used tags will go here! </div>
                <div label="Activity">
                    Comments and such will go here </div>
                <div label="Liked Posts">
                    Liked posts will go here </div>
                <div label="Dashboard">
                    Graphs on statistics will go here, things like percentages of langauges/tags used and such.</div>
            </Tabs> 
        </div>
    );
}
