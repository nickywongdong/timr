import './index.css'

import ValueSelector from '../value-selector'
import Icon from '../icon'

const TimerOption = ({
    icon,
    label,
    valueSelectorType
}) => {
    return (
        <div className='option-wrapper'>
            <Icon icon={icon}/>
            <div className='option-label'>{label}</div>
            <ValueSelector valueSelectorType={valueSelectorType}/>
        </div>
    )
}

export default TimerOption