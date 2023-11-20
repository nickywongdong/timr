// NavBar.jsx

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HouseDoor, GearWideConnected } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReusableModal from 'Components/ReusableModal';
import ConfigurationPanel from 'Components/ConfigurationPanel';

function NavBar() {
  const iconSize = 'calc(20px + 2vmin)';

  return (
    <Navbar data-bs-theme="dark" expand="lg">
      <Navbar.Brand><Link to="/"><HouseDoor size={iconSize} /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Item>
            <ReusableModal buttonText={<GearWideConnected size={iconSize} />} content={ConfigurationPanel} />
          </Nav.Item>
          <Nav.Item>
          <SignInSignOutButton />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
