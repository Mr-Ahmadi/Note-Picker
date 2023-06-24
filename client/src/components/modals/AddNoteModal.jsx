import {useState} from 'react'

import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import TimePicker from '../elements/TimePicker'
import addNote from '../../functions/requests/addNote'
import checkNote from '../../functions/validations/checkNote'

const AddNoteModal = ({show, onHide, fileID, setFiles, duration, currentTime}) => {
    const [requesting, setRequesting] = useState(false)
    const resetModel = _ => onHide()
    return (
        <Modal show={show} onHide={resetModel}>
            <Modal.Header closeButton> 
                <Modal.Title>Add Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text" id='title' placeholder='Title'/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Time (H/M/S):</Form.Label>
                    <TimePicker duration={duration} currentTime={currentTime}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control as="textarea" id='description' placeholder='Description'/>
                </Form.Group>
                <small id='status' className='text-danger'></small>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={resetModel}>
                    Close
                </Button>
                <Button id='addNoteButton' variant="primary" disabled={requesting} onClick={_ => {
                    const note = checkNote(duration, setRequesting)
                    if(note) {
                        addNote(fileID, note, resetModel, setFiles, setRequesting)
                    }
                }}>
                    {requesting && <><Spinner animation="border" variant="light" size='sm'/></>} Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddNoteModal