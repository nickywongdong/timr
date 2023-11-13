import './index.css'

import TimerOption from "../timer-option"
const ConfigurationPanel = () => {
    return (
        <div className='configuration-panel-wrapper'>
            <TimerOption icon={'duration-icon'} label={'Duration'} valueSelectorType={'time'}/>
            <TimerOption icon={'sound-icon'} label={'Sound'} valueSelectorType={'sound'}/>
            <TimerOption icon={'rest-icon'} label={'Rest Break'} valueSelectorType={'dropdown'}/>
        </div>
    )
}

export default ConfigurationPanel