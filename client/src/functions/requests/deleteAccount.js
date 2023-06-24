import axios from 'axios'

const deleteAccount = navigate => {
    axios({
        url: 'http://localhost:4000/user/deleteAccount',
        method: 'DELETE',
        withCredentials: true
    })
    .then(({data}) => {
        if(data.status === 'success'){
            navigate('/signup', {state: {navigateMessage: data.message}})
        } else {
            alert('Failed to delete account')
        }
    })
    .catch(_ => {
        alert('Error while sending request')
    })
}

export default deleteAccount