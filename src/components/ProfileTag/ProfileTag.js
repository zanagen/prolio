import React from "react";
import "./ProfileTag.css";

function ProfileTag(props) {
    let status;
    if (props.userStatus === "green") {
        status = "userStatusGreen";
    } else if (props.userStatus === "red") {
        status = "userStatusRed";
    } else {
        status = "userStatusGray";
    }

    return (
        <div className="profileTagContainer">
            <div className="picsContainer">
                <div className="profilePic">
                    <img
                        alt="userAvatar"
                        className="personImg"
                        src={props.userPic}
                        width="50"
                        height="50"
                    />
                </div>
                <div className="userStatusContainer">
                    <span className={status}></span>
                    {/*status --> green for online, red for offline, gray for inactive */}
                </div>
            </div>

            <div className="profileTextContainer">
                <div className="profileName">{props.name}</div>
                <div className="userTitle">{props.title}</div>
            </div>
        </div>
    );
}

export default ProfileTag;
