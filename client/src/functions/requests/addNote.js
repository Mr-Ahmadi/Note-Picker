import axios from 'axios'

const selector = document.querySelector.bind(document)

const addNote = (fileID, note, resetModal, setFiles, setrequesting) => {
  axios({
    url: 'http://localhost:4000/addNote',
    method: 'POST',
    withCredentials: true,
    data: {fileID, note}
  })
  .then(({data: {status, files}}) => {
    if (status === 'success') {
      setFiles(files)
      resetModal()
      setrequesting(false)
    } else {
      selector('#status').innerHTML = `- Failed to add note`
      setrequesting(false)
    }
  })
  .catch(err => {
    selector('#status').innerHTML = `- Error while requesting`
    setrequesting(false)
  })
}

export default addNote