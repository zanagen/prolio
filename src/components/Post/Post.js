import React, { Component } from "react";
//import "react-native-get-random-values";
//import { v4 as uuidv4 } from "uuid";

import "./Post.css";
import ProfileTag from "../ProfileTag/ProfileTag";
import Tag from "../Tag/Tag";
import LikeButton from "../LikeButton/LikeButton";
import postPic from "../postBackground.png";
import person from "../person.png";

/*
figure out how to pass data through multiple props
user data = { name, title, profile pic, status }
post data = { post image (including size), tags, number of likes }
*/

/*
will need to play around with pic size
*/

/*
function NewTag(props) {
  return <Tag name={props.name} />;
}

function postDescriptionLength(props){
  let pDL = {props}.length;
  return <span>pDL/250</span>
}

*/

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id, // uuidv4()
            username: props.username, // "zanagen@yahoo.com"
            name: props.name, // "Spongebob Squarepants"
            jobTitle: props.jobTitle, // "3D artist"
            profilePicSrc: props.profilePicSrc, // person
            userStatus: props.userStatus, // "red"
            postPicSrc: props.postPicSrc, // postPic
            postTitle: props.postTitle, // "3D animated new york city"
            postDate: props.postDate, // "August 10, 2020"
            postDescription: props.postDescription,
            // "For the 3D designathon this weekend, my team created a 3-dimensional version on new york city to commemorate stuff."
            postTags: props.postTags,
            // ["AdobeXD", "Discord", "Slack", "OtherDesigns", "etc."]
            numLikes: props.numLikes // 10
        };
    }

    render() {
        return (
            <div className="userPost">
                <div>Post ID: {this.state.id}</div>
                <div className="userProfileContainer">
                    <ProfileTag
                        name={this.state.name}
                        title={this.state.jobTitle}
                        userPic={this.state.profilePicSrc}
                        userStatus={this.state.userStatus} // green for online, red for offline, gray for inactive
                    />
                </div>
                <div className="userPostImageContainer">
                    <img
                        alt="postImg"
                        className="postImg"
                        src={this.state.postPicSrc}
                        width="500"
                        height="100"
                    />
                </div>
                <div className="userPostTextContainer">
                    <div className="userPostTextHeader">
                        <div className="postTitle">
                            <span>{this.state.postTitle}</span>
                        </div>
                        <div className="postDate">
                            <span>{this.state.postDate}</span>
                        </div>
                    </div>

                    <hr />

                    <div className="postDescriptionContainer">
                        <div className="postTextCharCount">
                            <span>{this.state.postDescription}</span>
                        </div>

                        <div className="postText">
                            postDescriptionLength
              <span>/250</span>
                        </div>
                    </div>
                </div>
                <div className="tagAndLikeContainer">
                    <div className="tagContainer">
                        <Tag name="AdobeXD" />
                        <Tag name="Discord" />
                        <Tag name="Slack" />
                        <Tag name="OtherDesigns" />
                        <Tag name="etc." />
                    </div>
                    <LikeButton likes={this.state.numLikes} />
                </div>
            </div>
        );
    }
}

/*
function Post(props) {
  return (
    <div className="userPost">
      <div className="userProfileContainer">
        <ProfileTag
          name="Spongebob Squarepants"
          title="3D artist"
          userPic={person}
          userStatus="green" //green for online, red for offline
        />
      </div>

      <div className="userPostImageContainer">
        <img
          alt="postImg"
          className="postImg"
          src={postPic}
          width="500"
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
          <Tag name="AdobeXD" />
          <Tag name="Discord" />
          <Tag name="Slack" />
          <Tag name="OtherDesigns" />
          <Tag name="etc." />
        </div>
        <LikeButton likes={150} />
      </div>
    </div>
  );
}

*/

export default Post;
