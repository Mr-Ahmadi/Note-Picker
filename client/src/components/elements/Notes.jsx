const Notes = ({note, isLast}) => {
    return (
        <div>
            <span className='text-success'>Title:</span> {note.title}
            <br/>
            <span className='text-success'>Selected Time:</span> {`${note.selectedTime.hour}:${note.selectedTime.min}:${note.selectedTime.sec}`}
            <br/>
            <span className='text-success'>Description:</span> {note.description}
            <br/>
            {!isLast && <hr/>}
        </div>
    )
}

export default Notes