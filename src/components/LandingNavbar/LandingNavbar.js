import React from "react";
import { Logo } from "../Navbar/NavbarElements";
import { Container, Button } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
// Prolio logo
import icon from "./icon.png";
import "./LandingNavbar.css"


export default function LandingNavbar() {
  const styles = {
    // inner padding of buttons
    button1: {
        float:'right',
        marginLeft:'2%',
    },
    button2: {
        float:'right',
        marginLeft:'2%',
    },
    button3: {
        float:'right',
    },
    navbarPad: {
      marginTop: "-5px",
    }
  }

  return (
      <Navbar expand="xl" bg="light" variant="light" fixed="top" color="#D3D3D3" style={styles.navbarPad}>
        <Container fluid>

          {/* Prolio logo */}
          <Navbar.Brand href="/login" className="img-container">
            <Logo class="logo" src={icon} variant="outline-light"/>
          </Navbar.Brand>
          <Container>
            <Button style={styles.button1} variant="danger">#ExploreJobs</Button>
            <Button style={styles.button2} variant="info">#Crowdfunding</Button>
            <Button style={styles.button3} variant="primary">#Login</Button>
          </Container>


          </Container>
        </Navbar>
      )
    }
