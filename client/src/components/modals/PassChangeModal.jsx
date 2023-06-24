import {useState} from 'react'

import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/esm/Spinner'

import changePass from '../../functions/requests/changePass'

const PassChangeModal = ({show, onHide}) => {
    const [requesting, setRequesting] = useState(false)
    const resetModel = _ => onHide()
    return (
        <Modal show={show} onHide={resetModel}>
            <Modal.Header closeButton> 
            <Modal.Title>Change Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Old password:</Form.Label>
                    <Form.Control type="password" id='oldPass' placeholder='Enter old password'/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>New password:</Form.Label>
                    <Form.Control type="password" id='newPass' placeholder='Enter new password'/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Repeat new password:</Form.Label>
                    <Form.Control type="password" id='reNewPass' placeholder='Re-enter new password'/>
                </Form.Group>
                <small id='status' className='text-danger'></small>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={resetModel}>
                    Close
                </Button>
                <Button variant="primary" disabled={requesting} onClick={_ => changePass(resetModel, setRequesting)}>
                    {requesting && <><Spinner animation="border" variant="light" size='sm'/></>} Update
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PassChangeModal