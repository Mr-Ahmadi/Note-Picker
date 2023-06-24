const selector = document.querySelector.bind(document)

const fileValidation = setRequesting => {
    setRequesting(true)
    if (selector('#file').value) {
        let formData = new FormData()
        const selectedFile = selector('#file').files[0]
        formData.append('file', selectedFile)
        return formData
    } else {
        setRequesting(false)
        selector('#status').innerHTML = '- No file is choosen'
        return false
    }
}

export default fileValidation