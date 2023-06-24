import axios from 'axios'

const selector = document.querySelector.bind(document)

const signUpUser = (user, navigate, setRequesting) => {
  setRequesting(true)
  axios({
    url: 'http://localhost:4000/user/signup',
    method: 'POST',
    withCredentials: true,
    data: user
  })
  .then(({data: {status, message}}) => {
    if (status === 'success') {
      setRequesting(false)
      navigate('/signin', {state: {navigateMessage: message}})
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

export default signUpUser