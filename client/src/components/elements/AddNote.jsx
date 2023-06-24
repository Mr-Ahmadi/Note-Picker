import {useState} from "react"
import AddNoteModal from "../modals/AddNoteModal"

const AddNote = ({fileID, setFiles, duration, currentTime, progress}) => {
    const [showAddNoteModal, setShowAddNoteModal] = useState(false)
    return (
      <>
        <div className='p-1 bg-dark sticky-top'>
          <div className='bg-primary p-2 d-flex justify-content-between text-light' onClick={_ => (progress === 100) && setShowAddNoteModal(true)}>
            <label className='w-25 text-start text-truncate'>New Note</label> 
            <label className='w-25'>{`${currentTime.hour}:${currentTime.min}:${currentTime.sec}`}</label>
            <label className='w-25 text-end'><i className='fa fa-solid fa-plus'></i></label>
          </div>
        </div>
        <AddNoteModal show={showAddNoteModal} onHide={_ => setShowAddNoteModal(false)} fileID={fileID} setFiles={setFiles} duration={duration} currentTime={currentTime}/>
      </>
    )
  }
  
  export default AddNote