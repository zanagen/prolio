import React from "react";
import ProlioNavbar from "../Navbar/Navbar";
import "../Help/Help";


export default function Messages() {
    return (
        <>
            <ProlioNavbar />
            <div className="title" style={{ maxWidth: "400px" }}>
                <h1>Messages</h1>
            </div>
        </>
      );
    }