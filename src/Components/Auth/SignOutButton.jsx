import React, { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export const SignOutButton = () => {
  const { instance, accounts } = useMsal();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    // Get the user's name from the first account if available
    if (accounts.length > 0) {
      setUserName(accounts[0].idTokenClaims?.given_name);
    }
  }, [accounts]);

  const handleLogout = (logoutType) => {
    setAnchorEl(null);

    if (logoutType === "popup") {
      instance.logoutPopup();
    } else if (logoutType === "redirect") {
      instance.logoutRedirect();
    }
  };

  return (
    <div>
      <IconButton
        onClick={(event) => setAnchorEl(event.currentTarget)}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {userName && (
          <MenuItem key="welcomeMessage" disabled>
            Welcome, {userName}
          </MenuItem>
        )}
        {/* Additional menu items can be added here */}
        <MenuItem onClick={() => handleLogout("redirect")} key="logoutRedirect">
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};
