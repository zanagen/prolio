import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProlioNavbar from "../Navbar/Navbar";

function Home() {
    return (
        <Router>
          <ProlioNavbar />
        </Router>
      );
    }
    
export default Home;