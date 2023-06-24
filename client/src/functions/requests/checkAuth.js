import axios from 'axios'

const authCheck = (setAuth, setUser) => {
  axios({
    url: 'http://localhost:4000/user/checkAuth',
    method: 'GET',
    withCredentials: true,
  })
  .then(({data}) => {
    if(data.status === 'success') {
      setAuth(true)
      setUser(data.user)
    } else {
      setAuth(false)
      setUser(null)
    }
  })
  .catch(_ => {
    setAuth(undefined)
  })
}

export default authCheck