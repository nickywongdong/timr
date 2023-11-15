import './index.css'

import ValueSelector from '../ValueSelector'
import Icon from '../Icon'

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