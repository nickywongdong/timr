// TimerOption.js
import React from 'react';
import './index.css';
import ValueSelector from 'Components/ValueSelector';
import Icon from 'Components/Icon';

const TimerOption = ({ icon, label, valueSelectorType, onSave }) => {
  const internalSave = (data) => {
    console.log("Handle save in timer option");

    onSave && onSave(data);
  };

  return (
    <div className='option-wrapper'>
      <Icon icon={icon} />
      <div className='option-label'>{label}</div>
      <ValueSelector valueSelectorType={valueSelectorType} onSave={internalSave} />
    </div>
  );
};

export default TimerOption;
