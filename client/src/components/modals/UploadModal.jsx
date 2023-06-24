import {useState} from 'react'

import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/esm/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'

import uploadFile from '../../functions/requests/uploadFile'
import checkFile from '../../functions/validations/checkFile'

const UploadModal = ({show, onHide, setFiles}) => {
    const [progress, setProgress] = useState(0)
    const [requesting, setRequesting] = useState(false)
    const resetModel = _ => {
        setProgress(0)
        onHide()
    }
    return (
        <Modal show={show} onHide={resetModel} className='text-light'>
            <Modal.Header closeButton> 
                <Modal.Title>Upload File</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-0'>
                <ProgressBar style={{height: '3px'}} className='fixed-top bg-gray'>
                    <ProgressBar now={progress} />
                </ProgressBar>
                <div className='p-3'>
                    <Form.Group className="mb-3">
                        <Form.Label>URL:</Form.Label>
                        <Form.Control type="file" id='file'/>
                    </Form.Group>
                    <small id='status' className='text-danger'></small>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={resetModel}>
                    Close
                </Button>
                <Button variant="primary" disabled={requesting} onClick={_ => {
                    const formData = checkFile(setRequesting)
                    if (formData) {
                        uploadFile(formData, resetModel, setFiles, setProgress, setRequesting)
                    }
                }}>
                    {requesting && <><Spinner animation="border" variant="light" size='sm'/></>} Upload
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UploadModal 