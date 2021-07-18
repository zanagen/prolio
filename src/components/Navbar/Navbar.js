import React, { useState } from "react";
import { useAuth } from '../../contexts/AuthContext';
import { useHistory, BrowserRouter as Router } from "react-router-dom";
import { Logo } from "./NavbarElements";
import { Container, Nav, NavDropdown, Button, Alert } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../Searchbar/Searchbar";
import icon from "./icon.png";
import "./Navbar.css";
import {
  faEnvelope,
  faQuestionCircle,
  faUser,
  faUserCircle,
  faUserFriends,
  faCog,
  faSignOutAlt,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

export default function ProlioNavbar() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const styles = {
    searchButton: {
        paddingTop: "0.25rem",
        paddingBottom: "0.25rem",
        paddingRight: "0.25rem",
        paddingLeft: "0.25rem"
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
      <Navbar expand="xl" bg="light" variant="light" fixed="top" color="#D3D3D3">
        <Container fluid>
          <Navbar.Brand href="/home" className="img-container">
            <Logo class="logo" src={icon} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavDropdown title = {<FontAwesomeIcon icon={faFilter} size = '2x' color="#808080"/>} variant="Secondary" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">Following</NavDropdown.Item>
              <NavDropdown.Item href="/">Recents</NavDropdown.Item>
              <NavDropdown.Item href="/">Job Posts</NavDropdown.Item>
              <NavDropdown.Item href="/">Trending</NavDropdown.Item>
            </NavDropdown>
            <SearchBar />
            <Button href="/MyConnections" className="m-1" style={styles.searchButton} variant="outline-primary" size="lg">
              <FontAwesomeIcon icon={faUserFriends} size = '2x' color="#0E50E3"/>
            </Button>
            <Button href="/Messages" className="m-1" style={styles.searchButton} variant="outline-primary" size="lg">
              <FontAwesomeIcon icon={faEnvelope} size = '2x' color="#1954d8"/>
            </Button>
            <NavDropdown title = {<FontAwesomeIcon icon={faUserCircle} size = '2x' color="#1954d8"/>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/MyProfile"><FontAwesomeIcon icon={faUser} /> MyProfile</NavDropdown.Item>
              <NavDropdown.Item href="/Settings"><FontAwesomeIcon icon={faCog} /> Settings</NavDropdown.Item>
              <NavDropdown.Item href="/Help"><FontAwesomeIcon icon={faQuestionCircle} /> Help</NavDropdown.Item>
              <NavDropdown.Divider />
              {error && <Alert variant="danger">{error}</Alert>}
              <NavDropdown.Item><Button variant="link" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout <strong>{" "}</strong> {currentUser.email}</Button></NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
      )
    }
