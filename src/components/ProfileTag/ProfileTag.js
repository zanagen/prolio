import "./ProfileTag.css";
import personPic from "./person.png";

function ProfileTag() {
  return (
    <div className="profileTagContainer">
      <div className="picsContainer">
        <div className="profilePic">
          <img
            alt="personImg"
            className="personImg"
            src={personPic}
            width="50"
            height="50"
          />
        </div>
        <div className="userStatusContainer">
          <span className="userStatus"></span>
        </div>
      </div>

      <div className="profileTextContainer">
        <div className="profileName">
          <span>Spongebob Squarepants</span>
        </div>
        <div className="userTitle">
          <span>3D artist</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileTag;
