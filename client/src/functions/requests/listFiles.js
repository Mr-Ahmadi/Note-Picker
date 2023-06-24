import axios from 'axios'

const listFiles = (setFiles) => {
    axios({
        url: 'http://localhost:4000/listfiles',
        method: 'GET',
        withCredentials: true
    })
    .then(({data: {status, files}}) => {
        if (status === 'success') {
            setFiles(files)
        } else {
            alert('Failed to load files list')
        }
    })
    .catch(_ => {
        alert('Error while requesting')
    })
}

export default listFiles