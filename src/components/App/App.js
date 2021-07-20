import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Logout from '../Logout/Logout';
import Home from '../Home/Home';
import Login from '../Login/Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../../contexts/AuthContext';
import Signup from "../Login/Signup";
import ForgotPassword from "../Login/ForgotPassword";
import PrivateRoute from "../Login/PrivateRoute";
import Settings from '../Settings/Settings';
import CrowdFund from '../CrowdFund/CrowdFund';
import Messages from '../Messages/Messages';
import MyConnections from '../MyConnections/MyConnections'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faUserCircle,
  faUserFriends,
  faSearch,
  faUser,
  faCog,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";


function App() {
  library.add(
    fab,
    faUserCircle,
    faEnvelope,
    faUserFriends,
    faSearch,
    faUser,
    faCog,
    faDollarSign,
    far,
  );
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/Home" component={Home} />
              <PrivateRoute path="/MyConnections" component={MyConnections} />
              <PrivateRoute path="/Messages" component={Messages} />
              <PrivateRoute path="/CrowdFund" component={CrowdFund} />
							<PrivateRoute path="/Settings" component={Settings} />
              <PrivateRoute path="/Logout" component={Logout} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;
