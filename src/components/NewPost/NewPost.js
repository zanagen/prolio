import "./NewPost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowRestore, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import React, {useState} from 'react';
import firebase from '../../firebase';
import { v4 as uuidv4 } from 'uuid';


/* faImage, faVideo */
/*
https://fontawesome.com/v5.15/icons/image?style=solid
https://fontawesome.com/v5.15/icons/video?style=solid
*/

//<input type="text" id="newPostText" name="fname" maxLength="50" />
//<input type="text" id="newPostText" name="fname" maxLength="250" />

// https://github.com/satansdeer/firebase-albums/blob/master/src/NewPhoto.js

const db = firebase.firestore();
const storage = firebase.storage();
//const currentUserID = firebase.auth().currentUser.uid; //get the current logged in files user's uid

// NewPostPic takes in nothing
export default function NewPost() {
    const [file, setFile] = useState(null); // variable to store the image file, initialized to null
    // useState sets file to null and creates a method setFile to change file's state

    const [title, setTitle] = useState("");

    const [text, setText] = useState("");

    // onFileChange saves file data, takes in an event
    const onFileChange = (e) => {
        setFile(e.target.files[0]); // saves to file the event's 1st file, saves selected file's URL to file
        console.log("file info: " + file);
    }
    // onTitleChange saves the title input from a form, takes in an event
    const onTitleChange = (e) => {
        setTitle(e.target.value);
        console.log("title: " + title);
    }

    const onTextChange = (e) => {
        setText(e.target.value);
        console.log("text: " + text);
    }

    // onUpload pushes the image to storage, then pushes image references to database
    const onUpload = async () => {
        const storageRef = storage.ref(); // firebase storage reference
        const fileRef = storageRef.child(file.name); // contains reference of file to upload
        await fileRef.put(file); // upload a file to cloud storage
        //fileRef.name === mountainImagesRef.name;   
        addtoDB(fileRef); // put data into firestore database
    }
    const addtoDB = async(fileRef) => {
        const id = uuidv4(); // Creates a new random ID for every post
        db.collection("Test").doc(String(id)).set({ //UUID is hardcodded as string
            fileName: file.name, // name of file - ex: person.png
            fileRef: await fileRef.getDownloadURL(), // storage URL location of file
            postTitle: title,
            postText: text,
            postDate: new Date(),
            numLikes: 0
        })
        .then(() => {
            console.log("NewPost.js: Document successfully written!");
        })
        .catch((error) => {
            console.error("NewPost.js: Error writing document: ", error);
        });
        setFile(null);
        setTitle("");
        setText("");
    }
  
        
    return(
        <div className="newPostContainer">
          {/* <h2>New Post</h2> */}
            
            <label>
                <input type="text" placeholder="Title..." onChange={onTitleChange} value={title} maxLength={50} />
            </label>
            <label> 
                <input type="text" placeholder="Description..." onChange={onTextChange} value={text} maxLength={250} />
            </label>
            <label for="fileUpload">
              <FontAwesomeIcon icon={faWindowRestore} />
            </label>
            <input className="browse" id="fileUpload" type="file" onChange={onFileChange} />
            
            <button onClick={onUpload}><FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
    );
}