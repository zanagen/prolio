import React, { Component } from "react";
//import "react-native-get-random-values";
//import { v4 as uuidv4 } from "uuid";

import "./Post.css";
import ProfileTag from "../ProfileTag/ProfileTag";
import Tag from "../Tag/Tag";
import LikeButton from "../LikeButton/LikeButton";

/*
figure out how to pass data through multiple props
user data = { name, title, profile pic, status }
post data = { post image (including size), tags, number of likes }
*/

/* keeps key of the new Tag and the Tag itself */
function ListItem(props) {
    return <div>{props.value}</div>;
}

/* takes in a list of strings, creates Tags from the list */
function TagList(props) {
    const tags = props.tags;
    const tagList = tags.map((tag) =>
        <ListItem key={tag.toString()} value={<Tag name={String(tag)} />} />
    );
    return (
        <div className="tagContainer">
            {tagList}
        </div>
    );
}

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
                            <span>{this.state.postDate}</span> {/*{this.state.postDate}*/}
                        </div>
                    </div>

                    <hr />

                    <div className="postDescriptionContainer">
                        <div className="postTextCharCount">
                            <span>{this.state.postDescription}</span>
                        </div>

                        <div className="postText">
                            <span>{String(this.state.postDescription).length}/250</span>
                        </div>
                    </div>
                </div>
                <div className="tagAndLikeContainer">
                    <TagList tags={this.state.postTags} />
                    <LikeButton likes={this.state.numLikes} />
                </div>
            </div>
        );
    }
}

export default Post;
