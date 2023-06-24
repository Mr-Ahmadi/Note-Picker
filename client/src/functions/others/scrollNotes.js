import setCurrentTime from './setCurrentTime'
import parseTime from './parseTime'

const scrollNotes = (target, currentTime, setCurrentTimeState) => {
  setCurrentTime(currentTime, setCurrentTimeState)
  const {hour, min, sec} = parseTime(Math.floor(target.currentTime))
  const selectedNotes =  document.querySelectorAll(`.forTime-${hour}-${min}-${sec}`)
  selectedNotes.length && selectedNotes[selectedNotes.length - 1]
  .scrollIntoView({behavior: 'smooth', inline: 'nearest', block: 'end'})
}

export default scrollNotes 