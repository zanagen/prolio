import React from "react";
import "./LikeButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
/*
https://fontawesome.com/v5.15/icons/thumbs-up?style=solid
icon for the like button
*/

function LikeButton() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="likeButtonAndNumberContainer">
      <button className="likeButton" onClick={() => setCount(count + 1)}>
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <span>{count}</span>
    </div>
  );
}

export default LikeButton;
