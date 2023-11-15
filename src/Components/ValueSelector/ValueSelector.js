const ValueSelector = ({valueSelectorType}) => {
    switch (valueSelectorType) {
        case 'sound':
          return <div>Sound</div>;
        case 'time':
          return <div>Time</div>;
        default:
          return <div>You did something wrong</div>;
      }
}

export default ValueSelector