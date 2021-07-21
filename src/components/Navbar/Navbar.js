import React, { useState } from "react";
import { useAuth } from '../../contexts/AuthContext';
import { useHistory, BrowserRouter as Router } from "react-router-dom";
import { Logo } from "./NavbarElements";
import { Container, Button, Alert, Dropdown, ButtonGroup } from "react-bootstrap";
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
          <Navbar.Brand href="/Home" className="img-container">
            <Logo class="logo" src={icon} variant="outline-light"/>
          </Navbar.Brand>

          {/* Collapsable Navbar for varying screen sizes */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            {/* Filter Dropdown for SearchBar */}
            <Dropdown as={ButtonGroup}>
                <Button variant="outline-light" color="#0E50E3" style={styles.searchButton} size="lg">
                  <FontAwesomeIcon icon={faFilter} size = '2x' color="#0E50E3"/>
                </Button>
              <Dropdown.Toggle variant="outline-light" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item href="/Home">Following</Dropdown.Item>
                <Dropdown.Item href="/Home">Recents</Dropdown.Item>
                <Dropdown.Item href="/Home">Job Posts</Dropdown.Item>
                <Dropdown.Item href="/Home">Trending</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <SearchBar />

            {/* MyConnections, Messages Buttons, Crowdfunding */}
              <Button href="/MyConnections" style={styles.searchButton} variant="outline-light" size="lg">
                <FontAwesomeIcon icon={faUserFriends} size = '2x' color="#0E50E3"/>
              </Button>
              <Button href="/Messages" style={styles.searchButton} variant="outline-light" size="lg">
                <FontAwesomeIcon icon={faEnvelope} size = '2x' color="#1954d8"/>
              </Button>
              <Button href="/CrowdFund" style={styles.searchButton} variant="outline-light" size="lg">
                <FontAwesomeIcon icon={faDollarSign} size = '2x' color="#1954d8"/>
              </Button>

              {/* User Profile Dropdown Menu */}
              <Dropdown as={ButtonGroup} >
                <Button variant="outline-light" style={styles.searchButton} size="lg">
                  <FontAwesomeIcon icon={faUserCircle} size = '2x' color="#0E50E3"/>
                </Button>
                <Dropdown.Toggle variant="outline-light" color="#1954d8" id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item href="/MyProfile"><FontAwesomeIcon icon={faUser} /> MyProfile</Dropdown.Item>
                  <Dropdown.Item href="/Settings"><FontAwesomeIcon icon={faCog} /> Settings</Dropdown.Item>
                  <Dropdown.Item href="/Help"><FontAwesomeIcon icon={faQuestionCircle} /> Help</Dropdown.Item>
                  <Dropdown.Divider />
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Dropdown.Item><Button variant="link" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout <strong>{" "}</strong> {currentUser.email}</Button></Dropdown.Item>
                </Dropdown.Menu> 
              </Dropdown> 
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
      )
    }
