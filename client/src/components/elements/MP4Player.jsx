import setDuration from '../../functions/others/setDuration'
import setCurrentTime from '../../functions/others/setCurrentTime'
import timeParser from '../../functions/others/parseTime'
import Spinner from 'react-bootstrap/esm/Spinner'

const MP4Player = ({url, setDuration: setDurationState, setCurrentTime: setCurrentTimeState, currentTime, progress}) => {
  return (
    <>
      {url === false 
        ? <h1 className='text-light'><span className='text-danger'>Failed</span> to load file<span className='text-danger'>!</span></h1>
        : (progress === 100 
          ? <video controls={(progress === 100) ? true : false} src={url} width='100%' height='100%' id='display' onLoadedData={_ => setDuration(setDurationState)} onTimeUpdate={e => {
              setCurrentTime(currentTime, setCurrentTimeState)
              const {hour, min, sec} = timeParser(Math.floor(e.target.currentTime))
              const selectedNotes =  document.querySelectorAll(`.forTime-${hour}-${min}-${sec}`)
              selectedNotes.length && selectedNotes[selectedNotes.length - 1]
              .scrollIntoView({behavior: 'smooth', inline: 'nearest', block: 'end'})
            }}></video>
          : <Spinner animation="border" variant="primary" size='lg'/>)
      }  
    </>
  )
}

export default MP4Player