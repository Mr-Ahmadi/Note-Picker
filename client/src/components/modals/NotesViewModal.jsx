import { useState } from 'react'
import { jsPDF } from 'jspdf'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/esm/Spinner'

import Notes from '../elements/Notes'
import exportPDF from '../../functions/others/exportPDF'
import exportSRT from '../../functions/others/exportSRT'

const NotesViewModal = ({ show, onHide, notes, originalname }) => {
    const [processing, setProcessing] = useState(false)
    const resetModel = _ => onHide()

    return (
        <>
            <Modal show={show} onHide={resetModel}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-truncate'>{originalname}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {notes.length
                        ? notes.map(note => (
                            <Notes
                                key={note._id}
                                note={note}
                                isLast={note._id === notes[notes.length - 1]._id}
                            />
                        ))
                        : <h3><span className='text-danger'>No</span> note written :(</h3>}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="light" onClick={resetModel}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={_ => exportSRT(notes, originalname)}>
                        Export Subtitles
                    </Button>
                    <Button
                        variant="primary"
                        disabled={processing}
                        onClick={_ => exportPDF(jsPDF, originalname, notes, setProcessing)}
                    >
                        {processing && <><Spinner animation="border" variant="light" size='sm' /> </>}Print
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NotesViewModal
