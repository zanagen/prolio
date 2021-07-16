// import { Nav, NavLink, NavMenu, Logo } from "./NavbarElements";
import React, { useState } from "react";
import { useAuth } from '../../contexts/AuthContext';
import { useHistory, BrowserRouter as Router } from "react-router-dom";
import { Logo } from "./NavbarElements";
import { Nav, NavDropdown, Button, Alert } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../Searchbar/Searchbar";
import SearchBarFilter from "../Searchbar/SearchbarFilter";
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
} from "@fortawesome/free-solid-svg-icons";

export default function ProlioNavbar() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

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
      <Navbar bg="light" variant="light" fixed="top" color="#D3D3D3">
        {/* <Container> */}
          <Nav className="me-auto">
            <Nav.Link href="/Home">
              <Logo class="logo" src={icon} />
            </Nav.Link>
            <Nav.Link href="/Home">
              <SearchBar />
              <SearchBarFilter />
            </Nav.Link>
            <Nav.Link href="/MyConnections">
              <FontAwesomeIcon icon={faUserFriends} className="icon1" size = '3x' color="#0E50E3"/>
            </Nav.Link>
            <Nav.Link href="/Messages">
              <FontAwesomeIcon icon={faEnvelope} className="icon2" size = '3x' color="#1954d8"/>
            </Nav.Link>
            <NavDropdown title = {<FontAwesomeIcon icon={faUserCircle} size = '3x' color="#1954d8"/>} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/MyProfile"><FontAwesomeIcon icon={faUser} /> MyProfile</NavDropdown.Item>
              <NavDropdown.Item href="/Settings"><FontAwesomeIcon icon={faCog} /> Settings</NavDropdown.Item>
              <NavDropdown.Item href="/Help"><FontAwesomeIcon icon={faQuestionCircle} /> Help</NavDropdown.Item>
              <NavDropdown.Divider />
              {error && <Alert variant="danger">{error}</Alert>}
              <NavDropdown.Item><Button variant="link" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout <strong>{" "}Email:</strong> {currentUser.email}</Button></NavDropdown.Item>

            </NavDropdown>
          </Nav>
        {/* </Container> */}
        </Navbar>
      </Router>
      )
    }
    //     <>
    //       <Nav>
    //         <NavMenu>
    //           <NavLink to="/Home" activestyle>
    //             <Logo src={icon} />
    //           </NavLink>
    //           <NavLink to="/Searchfeed" activestyle>
    //             <SearchBar />
    //           </NavLink>
    //           <NavLink to="/MyConnections" activestyle>
    //             {/*Regular*/}
    //             <FontAwesomeIcon icon={faBell} />
    //             {/*Solid*/}
    //             {/* <FontAwesomeIcon icon={["fas", "user-friends"]} /> */}
    //           </NavLink>
    //           <NavLink to="/Messages" activestyle>
    //             {/*Regular*/}
    //             <FontAwesomeIcon icon={faEnvelope} />
    //             {/*Solid*/}
    //             {/* <FontAwesomeIcon icon={["fas", "envelope"]} /> */}
    //           </NavLink>
    //           <NavLink to="/UserProfile" activestyle>
    //             {/*Regular*/}
    //             <FontAwesomeIcon icon={faUserCircle} />
    //             {/*Solid*/}
    //             {/* <FontAwesomeIcon icon={["fas", "user-circle"]} /> */}
    //           </NavLink>
    //         </NavMenu>
    //       </Nav>
    //     </>
    //   );
    // };
    
