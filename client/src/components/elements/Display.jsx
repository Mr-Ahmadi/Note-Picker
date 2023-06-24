import {useEffect} from 'react'
import MP4Player from './MP4Player'
import MP3Player from './MP3Player'
import loadFile from '../../functions/requests/loadFile'

const Display = ({fileID, fileExtention, setDuration, setCurrentTime, currentTime, setProgress, progress, setURL, url}) => {
  useEffect(_ => {
    const controller = new AbortController()
    loadFile(fileID, setURL, setProgress)
    return(_ => controller.abort())
  }, [fileID])
  
  return (
    <div className={`p-0 h-70 bg-dark ${fileExtention === 'mp3' && 'position-relative'} ${progress !== 100 && 'd-flex justify-content-center align-items-center'}`}>
      {(fileExtention === 'mp4') && <MP4Player url={url} setDuration={setDuration} setCurrentTime={setCurrentTime} currentTime={currentTime} progress={progress}/>}
      {(fileExtention === 'mp3') && <MP3Player url={url} setDuration={setDuration} setCurrentTime={setCurrentTime} currentTime={currentTime} progress={progress}/>}
    </div>
  )
}

export default Display