import axios from 'axios'

const deleteFile = (fileID, setFiles, setRequesting) => {
    setRequesting(true)
    axios({
        url: 'http://localhost:4000/deleteFile',
        method: 'POST',
        withCredentials: true,
        data: {fileID}
    })
    .then(({data: {status, files}}) => {
        if(status === 'success'){
            setRequesting(false)
            setFiles(files)
        } else {
            setRequesting(false)
            alert('Failed to delete file')
        }
    })
    .catch(_ => {
        setRequesting(false)
        alert('Error while requesting')
    })
}

export default deleteFile