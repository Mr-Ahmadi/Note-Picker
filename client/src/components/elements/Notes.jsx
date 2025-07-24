const Notes = ({note, isLast}) => {
    return (
        <div>
            <span className='text-success'>Title:</span> <label className="w-100 text-start text-truncate">{note.title}</label>
            <br/>
            <span className='text-success'>Selected Time:</span> <label className="w-100 text-start text-truncate">{`${note.selectedTime.hour}:${note.selectedTime.min}:${note.selectedTime.sec}`}</label>
            <br/>
            {note.description && <><span className='text-success'>Description:</span> <label className="w-100 text-start text-truncate">{note.description}</label></>}
            <br/>
            {!isLast && <hr/>}
        </div>
    )
}

export default Notes