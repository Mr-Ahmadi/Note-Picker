import setDuration from '../../functions/others/setDuration'
import setCurrentTime from '../../functions/others/setCurrentTime'
import parseTime from '../../functions/others/parseTime'
import Spinner from 'react-bootstrap/esm/Spinner'

const MP3Player = ({url, setDuration: setDurationState, setCurrentTime: setCurrentTimeState, currentTime, progress}) => {
  return (
    <>
      {url === false 
        ? <h1 className='text-light'><span className='text-danger'>Failed</span> to load file<span className='text-danger'>!</span></h1>
        : (progress === 100 
          ? <audio src={url} controls={true} width='100%' id='display' onLoadedData={_ => setDuration(setDurationState)} onTimeUpdate={e => {
              setCurrentTime(currentTime, setCurrentTimeState)
              const {hour, min, sec} = parseTime(Math.floor(e.target.currentTime))
              const selectedNotes =  document.querySelectorAll(`.forTime-${hour}-${min}-${sec}`)
              selectedNotes.length && selectedNotes[selectedNotes.length - 1]
              .scrollIntoView({behavior: 'smooth', inline: 'nearest', block: 'end'})
            }}></audio>
          : <Spinner animation="border" variant="primary" size='lg'/>)
        }
    </>
  )
}

export default MP3Player