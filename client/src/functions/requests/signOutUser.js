import axios from 'axios'

const signOutUser = (navigate) => {
  axios({
    url: 'http://localhost:4000/user/signout',
    method: 'POST',
    withCredentials: true
  })
  .then(({data: {status, message}}) => {
    if (status === 'success') {
      navigate('/signin', {state: {navigateMessage: message}})
    } else {
      alert('Sign out failed')
    }
  })
  .catch(_ => {
    alert('Error while requesting')
  })
}

export default signOutUser