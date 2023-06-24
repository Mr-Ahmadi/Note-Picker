import {useState} from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

import Note from '../elements/Note'
import Display from '../elements/Display'
import AddNote from '../elements/AddNote'

import unparseTime from '../../functions/others/unparseTime'

const FileViewModal = ({show, onHide, file, setFiles}) => {
    const [duration, setDuration] = useState({hour: 0, min: 0, sec: 0})
    const [currentTime, setCurrentTime] = useState({hour: 0, min: 0, sec: 0})
    const [progress, setProgress] = useState(0)
    const [url, setURL] = useState(null)

    const resetModel = _ => {
        setCurrentTime({hour: 0, min: 0, sec: 0})
        setProgress(0)
        setURL(null)
        onHide()
    }
    const fileExtention = file.originalname.split('.').pop().toLowerCase()

    return (
        <Modal show={show} onHide={resetModel} fullscreen={true} className='p-0'>
            <Modal.Header closeButton> 
                <Modal.Title className='text-truncate'>{file.originalname}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-0 bg-dark'>
                <ProgressBar style={{height: '2px'}} className='fixed-top bg-secondary'>
                    <ProgressBar now={progress}/>
                </ProgressBar>
                <Display fileID={file._id} setProgress={setProgress} url={url} setDuration={setDuration} 
                setCurrentTime={setCurrentTime} currentTime={currentTime} progress={progress} fileExtention={fileExtention} setURL={setURL} />
                <div className='h-30 overflow-auto text-center text-dark'>
                    <AddNote progress={progress} currentTime={currentTime} fileID={file._id} setFiles={setFiles} duration={duration}/>
                    {file.notes.sort((a, b) => ((unparseTime(a.selectedTime) > unparseTime(b.selectedTime)) ? 1 : -1)).map
                    (note => <Note progress={progress} note={note} fileExtention={fileExtention} selectedTime={note.selectedTime} key={note._id} fileID={file._id} setFiles={setFiles} url={url}/>)}
                </div>
            </Modal.Body>
            <Modal.Footer className='p-1'>
                <Button variant='light' onClick={resetModel}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FileViewModal