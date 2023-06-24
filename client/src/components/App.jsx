import '../styles/index.scss'
import '../styles/adjustment.css'

import { useEffect, useState } from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import Footer from './mains/Footer'
import Header from './mains/Header'
import Content from './mains/Content'
import SignIn from './mains/user/SignIn'
import SignUp from './mains/user/SignUp'
import checkAuth from '../functions/requests/checkAuth'
import Loading from './elements/Loading'
import NotFoundError from './mains/errors/NotFoundError'
import InternalError from './mains/errors/InternalError'

const App = _ => {
  const location = useLocation()

  const [auth, setAuth] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(_ => {
    checkAuth(setAuth, setUser)
    return _ => setAuth(null)
  }, [location])

  return (
    <Container>
      <Header auth={auth} user={user}/>
      <Routes>
        {auth === null && <Route path='*' element={<Loading/>}/>}
        {auth === undefined && <Route path='*' element={<InternalError checkAuth={_ => {
          setAuth(null)
          checkAuth(setAuth, setUser)
        }}/>}/>}
        {auth === true && <Route path='/' element={<Content/>}/>}
        {auth === false &&
          <>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </>
        }
        <Route path='*' element={<NotFoundError auth={auth}/>}/>
      </Routes>
      <Footer/>
    </Container>
  )
}

export default App