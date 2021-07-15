import React from "react";
// import { Nav, NavLink, NavMenu, Logo } from "./NavbarElements";
import { Logo } from "./NavbarElements";
import { Nav, NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../Searchbar/Searchbar";
import SearchBarFilter from "../Searchbar/SearchbarFilter";
import icon from "./icon.png";
import "./Navbar.css";
import {
  far,
  faEnvelope,
  faBell,
  faUser,
  faUserCircle,
  faUserFriends,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

export default function ProlioNavbar() {
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top">
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
              <NavDropdown.Item href="/MyProfile">/MyProfile</NavDropdown.Item>
              <NavDropdown.Item href="/UpdateProfile">Settings</NavDropdown.Item>
              <NavDropdown.Item href="/Help">Help</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Login">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        {/* </Container> */}
      </Navbar>
      </>
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
    
