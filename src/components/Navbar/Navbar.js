import React, { useState } from "react";
import { useAuth } from '../../contexts/AuthContext';
import { useHistory, BrowserRouter as Router } from "react-router-dom";
import { Logo } from "./NavbarElements";
import { Container, Button, Alert, NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../Searchbar/Searchbar";
// Prolio logo
import icon from "./icon.png";
import "./Navbar.css";
import {
  // Messages - NavBar icon
  faEnvelope,
  // Help - Navbar icon
  faQuestionCircle,
  // My Profile - Navbar icon
  faUser,
  // User Profile Dropdown Menu - Navbar icon
  faUserCircle,
  // My Connections - Navbar icon
  faUserFriends,
  // Settings - Navbar icon
  faCog,
  // Logout - Navbar icon
  faSignOutAlt,
  // Filter SearchBar - Navbar icon
  faFilter,
  // Crowdfunding
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function ProlioNavbar() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const styles = {
    // inner padding of buttons
    searchButton: {
        paddingTop: "0.15rem",
        paddingBottom: "0.15rem",
        paddingRight: "0.25rem",
        paddingLeft: "0.25rem",
        marginLeft: "5px",
    },
    navbarPad: {
      marginTop: "-5px",
      border: "2px solid black",
    }
  }

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <Router>
      <Navbar expand="xl" bg="light" variant="light" fixed="top" color="#D3D3D3" style={styles.navbarPad}>
        <Container fluid>

          {/* Prolio logo */}
          <Navbar.Brand href="/" className="img-container">
            <Logo class="logo" src={icon} variant="outline-light"/>
          </Navbar.Brand>

          {/* Collapsable Navbar for varying screen sizes */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            {/* Filter Dropdown for SearchBar */}
            <NavDropdown title={<FontAwesomeIcon icon={faFilter} size = '2x' color="#0E50E3"/>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Following</NavDropdown.Item>
              <NavDropdown.Item href="/">Recents</NavDropdown.Item>
              <NavDropdown.Item href="/">Job Posts</NavDropdown.Item>
              <NavDropdown.Item href="/">Trending</NavDropdown.Item>
            </NavDropdown>


             <SearchBar />


          <div className="buttonContainer">
            {/* MyConnections, Messages Buttons, Crowdfunding */}
            <div className="buttons">
              <Button href="/MyConnections" style={styles.searchButton} variant="outline-light" size="lg">
                <FontAwesomeIcon icon={faUserFriends} size = '2x' color="#0E50E3"/>
              </Button>
            </div>
            <div className="buttons">
              <Button href="/Messages" style={styles.searchButton} variant="outline-light" size="lg">
                <FontAwesomeIcon icon={faEnvelope} size = '2x' color="#1954d8"/>
              </Button>
            </div>
            <div className="buttons">
              <Button href="/CrowdFund" style={styles.searchButton} variant="outline-light" size="lg">
                <FontAwesomeIcon icon={faDollarSign} size = '2x' color="#1954d8"/>
              </Button>
            </div>

              {/* User Profile Dropdown Menu */}
            <div className="buttons">
              <NavDropdown title={<FontAwesomeIcon icon={faUserCircle} size = '2x' color="#0E50E3"/>} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/MyProfile"><FontAwesomeIcon icon={faUser} /> MyProfile</NavDropdown.Item>
                  <NavDropdown.Item href="/Settings"><FontAwesomeIcon icon={faCog} /> Settings</NavDropdown.Item>
                  <NavDropdown.Item href="/Help"><FontAwesomeIcon icon={faQuestionCircle} /> Help</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {error && <Alert variant="danger">{error}</Alert>}
                  <NavDropdown.Item><Button variant="link" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout <strong>{" "}</strong> {currentUser.email}</Button></NavDropdown.Item>
              </NavDropdown> 
            </div>
          </div>
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
      )
    }
