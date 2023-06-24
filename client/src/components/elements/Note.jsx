import { useState } from "react"
import Spinner from "react-bootstrap/esm/Spinner"
import deleteNote from "../../functions/requests/deleteNote"
import NoteViewModal from "../modals/NoteViewModal"

const Note = ({note, fileID, selectedTime: {hour, min, sec}, setFiles, url, fileExtention, progress}) => {
  const [showNoteViewModal, setShowNoteViewModal] = useState(false)
  const [requesting, setRequesting] = useState(false)

  return (
    <>
      <div className={`bg-light p-2 m-1 d-flex justify-content-between forTime-${hour}-${min}-${sec}`}  onDoubleClick={_ => (progress === 100) && setShowNoteViewModal(true)}>
        <label className='w-25 text-start text-truncate'>
          <label onClick={_ => (progress === 100) && setShowNoteViewModal(true)}>
            {note.title}
          </label>
        </label> 
        <label className='w-25'>{`${hour}:${min}:${sec}`}</label>
        <label className='w-25 text-end'>
          <label className='link-danger' disabled={requesting} onClick={_ => deleteNote(fileID, note._id, setFiles, setRequesting)}>
            {requesting ? <><Spinner animation="border" variant="danger" size='sm'/></> : <i className='fa fa-trash fa-solid'></i>}
          </label>
        </label>
      </div>
      <NoteViewModal show={showNoteViewModal} onHide={_ => setShowNoteViewModal(false)} note={note} url={url} fileExtention={fileExtention}/>
    </>
  )
}

export default Note