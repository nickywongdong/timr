// Navigation.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { HouseDoor, GearWideConnected } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {

  const iconSize = 'calc(20px + 2vmin)';

  return (
    <Navbar data-bs-theme="dark" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <HouseDoor size={iconSize} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Item>
            <Link to="/configuration" className="nav-link">
              <GearWideConnected size={iconSize} />
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
