import axios from 'axios'

const deleteNote = (fileID, noteID, setFiles, setRequesting) => {
    setRequesting(true)
    axios({
        url: 'http://localhost:4000/deleteNote',
        method: 'POST',
        withCredentials: true,
        data: {fileID, noteID}
    })
    .then(({data: {status, files}}) => {
        if(status === 'success'){
            setRequesting(false)
            setFiles(files)
        } else {
            setRequesting(false)
            alert('Failed to delete note')
        }
    })
    .catch(_ => {
        setRequesting(false)
        alert('Error while requesting')
    })
}

export default deleteNote