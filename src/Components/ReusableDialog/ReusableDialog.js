// ReusableDialog.js
import { forwardRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ReusableDialog = ({ buttonText, content: ContentComponent, onSave }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    console.log("formData:", formData);
    if (formData) {
      console.log("handling save in reusable dialog: ", formData);
      onSave(formData); // Call the onSave function with the data
      handleClose(); // Close the dialog
    }
  };

  return (
    <div>
      <Button className="me-2 mb-2" onClick={handleOpen} variant="dark">
        {buttonText}
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add a timr
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSave}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        {ContentComponent && (
          <ContentComponent
            onClose={handleClose}
            onFormChange={(data) => setFormData(data)}
          />
        )}
      </Dialog>
    </div>
  );
};

export default ReusableDialog;
