const parseTime = (sec) => {
    const min = (sec - (sec % 60)) / 60
    const hour = (min - (min % 60)) / 60
    return {hour, min: (min % 60), sec: (sec % 60)}
}

export default parseTime