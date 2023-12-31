// NavBar.jsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import SignInSignOutButton from 'Components/Auth/SignInSignOutButton';
import ReusableDialog from 'Components/ReusableDialog';
import ConfigurationPanel from 'Components/ConfigurationPanel';

function NavBar() {
  const iconSize = 'calc(20px + 2vmin)';

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Timr
        </Typography>
        <ReusableDialog
          buttonText={<AddIcon size={iconSize} />}
          content={(props) => <ConfigurationPanel {...props} />}
        />
        <SignInSignOutButton />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
