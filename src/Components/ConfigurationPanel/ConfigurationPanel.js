// ConfigurationPanel.js
import React, { useState } from 'react';
import './index.css';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SnoozeIcon from '@mui/icons-material/Snooze';
import TimerOption from 'Components/TimerOption';

const ConfigurationPanel = ({ onClose, onSave }) => {
    const [selectedSound, setSelectedSound] = useState('');
    const [selectedTime, setSelectedTime] = useState(null);

    const handleSaveInternal = () => {
        console.log("Handle save in configuration panel");
        onSave && onSave({ sound: selectedSound, time: selectedTime });
        onClose(); // Close the dialog or perform other actions as needed
    };


    return (
        <div className='configuration-panel-wrapper'>
            <TimerOption
                icon={<TimelapseIcon />}
                label={'Duration'}
                valueSelectorType={'time'}
                onSave={handleSaveInternal}
            />
            <TimerOption
                icon={<VolumeUpIcon />}
                label={'Sound'}
                valueSelectorType={'sound'}
                onSave={handleSaveInternal}
            />
            <TimerOption
                icon={<SnoozeIcon />}
                label={'Rest Break'}
                valueSelectorType={'rest-time'}
                onSave={handleSaveInternal}
            />
            {/* Additional buttons or UI elements */}
        </div>
    );
};

export default ConfigurationPanel;
