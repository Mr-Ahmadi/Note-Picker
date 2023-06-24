import axios from 'axios'

const selector = document.querySelector.bind(document)
const signInUser = (user, navigate, setRequesting) => {
  setRequesting(true)
  axios({
    url: 'http://localhost:4000/user/signin',
    method: 'POST',
    withCredentials: true,
    data: user
  })
  .then(({data: {status, message}}) => {
    if (status === 'success') {
      setRequesting(false)
      navigate('/', {state: {navigateMessage: message}})
    } else {
      setRequesting(false)
      selector('#status').classList = 'text-danger'
      selector('#status').innerHTML = `- ${message}`
    }
  })
  .catch(_ => {
    setRequesting(false)
    selector('#status').classList = 'text-danger'
    selector('#status').innerHTML = `- Error while requesting`
  })
}

export default signInUser