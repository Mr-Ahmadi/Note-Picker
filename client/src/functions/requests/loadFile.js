import axios from 'axios'

const loadFile = (fileID, setURL, setProgress, controller) => {
    axios({
        url: 'http://localhost:4000/loadfile',
        method: 'POST',
        withCredentials: true,
        data: {fileID}, 
        responseType: 'blob',
        signal: controller,
        onDownloadProgress: ev => setProgress(Math.round((ev.loaded * 100) / ev.total))
    })
    .then(({data}) => {
        if (data.type === 'application/octet-stream') {
            let blob = new Blob([data], {type: 'video/mp4'} )
            let url = URL.createObjectURL(blob)
            setURL(url)
        } else {
            setProgress(0)
            setURL(false)
        }
    })
    .catch(_ => {
        setProgress(0)
        setURL(false)
    })
}

export default loadFile