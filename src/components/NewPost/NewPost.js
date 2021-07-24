import "./NewPost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faVideo,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

/* faImage, faVideo */
/*
https://fontawesome.com/v5.15/icons/image?style=solid
https://fontawesome.com/v5.15/icons/video?style=solid
*/

//<input type="text" id="newPostText" name="fname" maxLength="50" />
//<input type="text" id="newPostText" name="fname" maxLength="250" />

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

function NewPost() {
  return (
    <div className="newPostContainer">
      <div className="newPostTextBoxAndSubmitContainer">
        <div className="newPostTextBoxesContainer">
          <div className="newPostTitleTextBoxContainer">
            <label>New Post TITLE:</label>
            <textarea id="newPostTitle" maxLength="50"></textarea>
            <span class="input" role="textbox" contenteditable></span>
          </div>
          <div className="newPostTextBoxContainer">
            <label>New Post TEXT:</label>
            <textarea data-expandable maxLength="250"></textarea>
          </div>
        </div>

        <div className="newPost_PostButtonContainer">
          <button className="newPostButton">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>

      <div className="newPostAttachmentButtons">
        <FontAwesomeIcon icon={faImage} />
        <div className="newPostInput">
          <input type="file" id="img" name="img" accept="image/*" />
        </div>
        <FontAwesomeIcon icon={faVideo} />
        <div className="newPostInput">
          <input type="file" id="vid" name="img" accept="video/*" />
        </div>
      </div>
    </div>
  );
}

export default NewPost;
