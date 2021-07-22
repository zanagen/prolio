import React from "react";
//import Button from "./Button";
import Tag from "../Tag/Tag";
import ProlioNavbar from "../Navbar/Navbar";
import icon from "../person.png";
import "./MyProfile.css";


export default function MyProfile() {
    return (
        <div id="profile">

            <ProlioNavbar />

            <div className="header_area">
                <div className="profile_info">
                    <div className="icon_container">
                        <div className="profileimg">
                            <img alt="Profile Pic" className="icon_circle" src={icon} />
                        </div>

                        <div className="status_container">
                            <div classname="status" />
                        </div>
                    </div>

                    <div className="header_info">
                        <span id="profile_name">FirstName LastName</span>
                        <div id="base_info">@user - Job Title - Location</div>
                        <div id="blurb">Profile content blurb </div>
                        <div className="tag_container">
                            <Tag name="Adobe XD" />
                            <Tag name="Adobe XD" />
                            <Tag name="Adobe XD" />
                            <Tag name="Adobe XD" />
                            <Tag name="Adobe XD" />
                        </div>
                    </div>
                </div>

                <div className="button_container">
                        {/*<Button content="Hi" />*/}
                </div>
             </div>
        </div>
    );
}