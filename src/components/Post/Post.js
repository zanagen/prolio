import "./Post.css";
import ProfileTag from "../ProfileTag/ProfileTag";
import Tag from "../Tag/Tag";
import LikeButton from "../LikeButton/LikeButton";
import postPic from "./postBackground.png";

function Post() {
  return (
    <div className="userPost">
      <div className="userProfileContainer">
        <ProfileTag />
      </div>

      <div className="userPostImageContainer">
        <img
          alt="postImg"
          className="postImg"
          src={postPic}
          width="500" /* play with size of pic later */
          height="100"
        />
      </div>

      <div className="userPostTextContainer">
        <div className="userPostTextHeader">
          <div className="postTitle">
            <span>3D animated new york city</span>
          </div>
          <div className="postDate">
            <span>August 6, 2020</span>
          </div>
        </div>

        <hr />

        <div className="postDescriptionContainer">
          <div className="postTextCharCount">
            <span>
              For the 3D designathon this weekend, my team created a
              3-dimensional version on new york city to commemorate stuff.
            </span>
          </div>

          <div className="postText">
            <span>115/250</span>
          </div>
        </div>
      </div>

      <div className="tagAndLikeContainer">
        <div className="tagContainer">
          <Tag name="Adobe XD" />
          <Tag name="Discord" />
          <Tag name="Slack" />
          <Tag name="OtherDesigns" />
          <Tag name="etc." />
        </div>
        <LikeButton />
      </div>
    </div>
  );
}

export default Post;
