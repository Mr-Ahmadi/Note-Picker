const unparseTime = (time) => {
    return ((time.hour * 3600) + (time.min * 60) + time.sec)
}

export default unparseTime