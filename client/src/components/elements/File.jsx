import { useState } from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'
import deleteFile from '../../functions/requests/deleteFile'
import FileViewModal from '../modals/FileViewModal'
import NotesViewModal from '../modals/NotesViewModal'

const File = ({file, setFiles}) => {
    const [showViewModal, setShowViewModal] = useState(false)
    const [requesting, setRequesting] = useState(false)
    const [showNotesModal, setShowNotesModal] = useState(false)
    const fileExtention = file.originalname.split('.').pop().toLowerCase()
    return (
        <>
            <div className='d-flex flex-column col-4 col-md-3 col-lg-2 pt-2 rounded border border-dark bg-info' onDoubleClick={_ => setShowViewModal(true)}>
                <div className="border border-secondary rounded bg-primary">
                    <div className={`h1 py-4 px-3 text-center m-0 rounded bg-secondary border border-primary`}>
                        {(fileExtention === 'mp4') && <i className='fa fa-file-video text-light'></i>}
                        {(fileExtention === 'mp3') && <i className='fa fa-file-audio text-light'></i>}
                    </div>
                </div>
                <label className='text-truncate text-center pt-1'>
                    {file.originalname}
                </label>
                <small className="text-end mb-1">
                    <span className="link-dark" onClick={_ => setShowViewModal(true)}><i className='fa fa-solid fa-eye'></i></span>
                    &nbsp;&nbsp;
                    <span className="link-secondary" onClick={_ => deleteFile(file._id, setFiles, setRequesting)}>
                        {requesting ? <><Spinner animation="border" variant='secondary' size='sm'/></> : <i className='fa fa-trash fa-solid'></i>}
                    </span>
                    &nbsp;&nbsp;
                    <span className="float-start " onClick={_ => setShowNotesModal(true)}><i className="fa fa-solid fa-list"></i></span>
                </small>
            </div>
            <FileViewModal show={showViewModal} onHide={_ => setShowViewModal(false)} file={file} setFiles={setFiles}/>
            <NotesViewModal show={showNotesModal} onHide={_ => setShowNotesModal(false)} notes={file.notes} originalname={file.originalname}/>
        </>
    )
}

export default File