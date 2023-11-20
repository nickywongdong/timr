// NavBar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import ReusableDialog from 'Components/ReusableDialog';
import ConfigurationPanel from 'Components/ConfigurationPanel';

function NavBar() {
  const iconSize = 'calc(20px + 2vmin)';

  const handleSaveConfiguration = (data) => {
    console.log('Saved configuration:', data);
    // Additional logic if needed
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Timr
        </Typography>
        <ReusableDialog
          buttonText={<AddIcon size={iconSize} />}
          content={(props) => <ConfigurationPanel {...props}
          onSave={handleSaveConfiguration} />}
        />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
