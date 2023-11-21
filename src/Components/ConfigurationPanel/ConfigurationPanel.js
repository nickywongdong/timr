// ConfigurationPanel.js
import React from 'react';
import './index.css';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SnoozeIcon from '@mui/icons-material/Snooze';
import TimerOption from 'Components/TimerOption';

const ConfigurationPanel = () => {

  return (
    <div className='configuration-panel-wrapper'>
      <TimerOption
        icon={<TimelapseIcon />}
        label={'Duration'}
        valueSelectorType={'time'}
      />
      <TimerOption
        icon={<VolumeUpIcon />}
        label={'Sound'}
        valueSelectorType={'sound'}
      />
      <TimerOption
        icon={<SnoozeIcon />}
        label={'Rest Break'}
        valueSelectorType={'rest-time'}
      />
      {/* Additional buttons or UI elements */}
    </div>
  );
};

export default ConfigurationPanel;
