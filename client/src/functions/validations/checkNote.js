const selector = document.querySelector.bind(document)

const userValidation = (duration, setrequesting) => {
    setrequesting(true)
    const title = selector('#title').value
    const hour = parseInt(selector('#hour').value)
    const min = parseInt(selector('#min').value)
    const sec = parseInt(selector('#sec').value)
    const selectedTime = {hour, min: (min % 60), sec: (sec % 60)}
    const description = selector('#description').value
    let note = {title, selectedTime, description}
    selector('#status').classList = 'text-danger'
    if(!title) {
        selector('#status').innerHTML = '- Fill required fields'
        setrequesting(false)
        return false
    } else if(((duration.hour * 3600) + (duration.min * 60) 
    + duration.sec) < ((hour * 3600) + (min * 60) + sec)) {
        selector('#status').innerHTML = '- Unvalid time is selected'
        setrequesting(false)
        return false
    } else {
        selector('#status').innerHTML = ''
        return note
    }
}

export default userValidation