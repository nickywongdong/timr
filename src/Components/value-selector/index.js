const ValueSelector = ({valueSelectorType}) => {
    if (valueSelectorType==='sound'){
        return (
            <div>Sound</div>
        )
    }
    else if (valueSelectorType ==='time') {
        return (
            <div>Time</div>
        )
    }
    return (
        <div>You did something wrong</div>
    )
}

export default ValueSelector