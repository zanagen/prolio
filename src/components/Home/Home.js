import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProlioNavbar from "../Navbar/Navbar";
import Upload from "../Database/Upload"

function Home() {
    return (
        <div>
          <ProlioNavbar />
          <Upload />
        </div>
      );
    }
    
export default Home;