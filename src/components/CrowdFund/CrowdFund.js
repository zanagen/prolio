import React from "react";
import ProlioNavbar from "../Navbar/Navbar";
import "../Help/Help.css"


export default function CrowdFund() {
  return (
    <>
        <ProlioNavbar />
        <div className="title" style={{ maxWidth: "400px" }}>
            <h1>Crowdfunding</h1>
        </div>
    </>
  );
}