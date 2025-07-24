import {useEffect} from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import snapFrame from '../../functions/others/snapFrame'

const NoteViewModal = ({show, onHide, note, url, fileExtention}) => {
    useEffect(_ => {
        snapFrame(url, note.selectedTime)
    })
    const resetModel = _ => onHide()
    return (
        <Modal show={show} onHide={resetModel}>
            <Modal.Header closeButton> 
            <Modal.Title className='text-start text-truncate'>{note.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                {note.description && <div className='when-resize'>
                    <label className='h6'>Description:</label> {note.description}
                </div>}
                <div className='text-center'>
                    {fileExtention === 'mp4' && <div className='div-canvas'><canvas></canvas></div>}
                </div>
                <small className='text-muted text-end d-block'>{`${note.selectedTime.hour}:${note.selectedTime.min}:${note.selectedTime.sec}`}</small>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={resetModel}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default NoteViewModal