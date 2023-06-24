import axios from 'axios'

const selector = document.querySelector.bind(document)
    const uploadFie = (formData, resetModel, setFiles, setProgress, setRequesting) => {
    axios({
        url: 'http://localhost:4000/uploadFile',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        method: 'POST',
        withCredentials: true,
        data: formData,
        onUploadProgress: ev => {
            selector('#status').innerHTML = ''
            setProgress(Math.round((ev.loaded * 100) / ev.total))
        }
    })
    .then(({data}) => {
        if(data.status === 'success'){
            setRequesting(false)
            setFiles(data.files)
            resetModel()
        } else {
            setRequesting(false)
            setProgress(0)
            selector('#status').innerHTML = `- ${data.message}`
        }
    })
    .catch(_ => {
        setRequesting(false)
        setProgress(0)
        selector('#status').innerHTML = `- Error while requesting`
    })
}

export default uploadFie