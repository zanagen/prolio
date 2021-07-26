import React, { Component } from "react";
import "./LikeButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
/*
https://fontawesome.com/v5.15/icons/thumbs-up?style=solid
icon for the like button
*/

/*
React calls constructor(), 
  then render(), 
  then componentDidMount(), 
  then whatever method calls setState() which calls render(). 
if component is removed from DOM, 
  React calls componentWillUnmount() to stop updating
*/

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: props.likes,
            show: true
        };
    }

    updateLikes = () => {
        this.setState({ clicks: this.state.clicks + 1 });
        console.log("num likes: " + this.state.clicks);
    };

    render() {
        return (
            <div className="likeButtonAndNumberContainer">
                <button className="likeButton" onClick={this.updateLikes}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>

                <span>{this.state.clicks}</span>
            </div>
        );
    }
}

export default LikeButton;
