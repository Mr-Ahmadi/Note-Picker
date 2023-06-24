import axios from 'axios'
import checkPass from '../validations/checkPassword'

const selector = document.querySelector.bind(document)

const changePass = (resetModal, setRequesting) => {
    setRequesting(true)
    const oldPassword = selector('#oldPass').value
    const newPassword = selector('#newPass').value
    const reNewPassword = selector('#reNewPass').value
    if (newPassword === reNewPassword) {
        if (checkPass(newPassword).validation) {
            selector('#status').innerHTML = ''
            axios({
                url: 'http://localhost:4000/user/changepass',
                method: 'POST',
                withCredentials: true,
                data: {oldPassword, newPassword}
            })
            .then(({data: {status, message}}) => {
                if (status === 'success') {
                    setRequesting(false)
                    resetModal()
                } else {
                    setRequesting(false)
                    selector('#status').innerHTML = `- ${message}`
                }
            })
            .catch(_ => {
                setRequesting(false)
                selector('#status').innerHTML = `- Error while requesting`
            })
        } else {
            setRequesting(false)
            console.log(newPassword)
            selector('#status').innerHTML = `- ${checkPass(newPassword).message}`
        }
    } else {
        setRequesting(false)
        selector('#status').innerHTML = '- Passwords do not match'
    }
}

export default changePass