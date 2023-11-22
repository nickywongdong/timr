import './index.css'
import { useState } from 'react';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useTimerContext } from 'Contexts/TimerContext';

const ValueSelector = ({ valueSelectorType }) => {
  const { setTimerContextData } = useTimerContext();
  const [sound, setSound] = useState('');

  switch (valueSelectorType) {
    case 'sound':
      return (
        <FormControl fullWidth>
          <InputLabel id="sound-select-label">Sound</InputLabel>
          <Select
            labelId="sound-select-label"
            id="sound-select"
            value={sound}
            label="Sound"
            onChange={(event) => {
              const selectedSound = event.target.value;
              setSound(selectedSound);
              setTimerContextData({ sound: selectedSound });
            }}
          >
            <MenuItem value={"Beep"}>Beep</MenuItem>
            <MenuItem value={"Horn"}>Horn</MenuItem>
            <MenuItem value={"Yell"}>Yell</MenuItem>
          </Select>
        </FormControl>
      );
    case 'time':
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MultiSectionDigitalClock
            views={['hours', 'minutes', 'seconds']}
            ampm={false}
            onChange={(date) => setTimerContextData({ stopwatchTime: date })}
          />
        </LocalizationProvider>
      );
    case 'rest-time':
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MultiSectionDigitalClock
            views={['hours', 'minutes', 'seconds']}
            ampm={false}
            onChange={(date) => setTimerContextData({ restTime: date })}
          />
        </LocalizationProvider>
      );
    default:
      console.error(`Unexpected valueSelectorType: ${valueSelectorType}`);
      return <div>Unexpected valueSelectorType</div>;
  }
};

export default ValueSelector;
