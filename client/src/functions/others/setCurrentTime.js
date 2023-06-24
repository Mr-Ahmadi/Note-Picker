import parseTime from './parseTime'
import unparseTime from './unparseTime'

const selector = document.querySelector.bind(document)

const fillSelect = (currentTime, setCurrentTime) => {
    if(unparseTime(currentTime) !== Math.floor(selector('#display').currentTime)){
         setCurrentTime(parseTime(Math.floor(selector('#display').currentTime)))
    }
} 

export default fillSelect