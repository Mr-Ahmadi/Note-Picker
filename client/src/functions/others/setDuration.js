import parseTime from './parseTime'

const selector = document.querySelector.bind(document)

const fillSelect = (setDuration) => {
    setDuration(parseTime(Math.floor(selector('#display').duration)))
}

export default fillSelect