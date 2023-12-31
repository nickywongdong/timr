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

import { useTimerContext } from 'Contexts/TimerContext';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ReusableDialog = ({ buttonText, content: ContentComponent }) => {
  const [open, setOpen] = useState(false);
  const { timerData } = useTimerContext();

  const handleOpen = () => {
    document.ontouchstart = (e) => {e.preventDefault()}
    setOpen(true)
  };
  const handleClose = () => {
    document.ontouchstart = (e) => {return true}
    setOpen(false)
  };

  const formatTime = (time) => time.format('HH:mm:ss');

  const onHandleSave = () => {
    console.log("Stopwatch time:", formatTime(timerData.stopwatchTime));
    console.log("Rest Time:", formatTime(timerData.restTime));
    console.log("Sound:", timerData.sound);

    handleClose();
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
            <Button autoFocus color="inherit" onClick={onHandleSave}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        {ContentComponent && (
          <ContentComponent
            onClose={handleClose}
          />
        )}
      </Dialog>
    </div>
  );
};

export default ReusableDialog;
