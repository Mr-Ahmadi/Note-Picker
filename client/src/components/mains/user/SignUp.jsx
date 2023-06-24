import { useState } from 'react'
import {useNavigate, useLocation, Link} from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/esm/Spinner'

import resetForm from '../../../functions/others/resetForm'
import signUpUser from '../../../functions/requests/signUpUser'
import checkUser from '../../../functions/validations/checkUser'

const SignUp = _ => {
  const navigate = useNavigate()
  const location = useLocation()
  const [requesting, setRequesting] = useState(false)
  return (
    <div className='col-12 col-md-6 col-lg-5 my-2 my-md-3 my-lg-4 mx-auto rounded border-top border-primary bg-primary'>
      <Form className='p-3 rounded text-light bg-secondary border-bottom border-primary'>
        <h3 className='text-center'>Sign Up</h3>
        <hr className='my-1'/>
        <Form.Group className='mb-2'>
          <Form.Label>Name:</Form.Label>
          <Form.Control type='text' placeholder='Your name' id='name' size='sm'/>
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Label>Email:</Form.Label>
          <Form.Control type='text' placeholder='Your email' id='email' size='sm'/>
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Label>Password:</Form.Label>
          <Form.Control type='password' placeholder='Your password' id='password' size='sm'/>
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Label>Repeat Password:</Form.Label>
          <Form.Control type='password' placeholder='Repeat Your password' id='rePassword' size='sm'/>
        </Form.Group>
        <small id='status' className='text-success'>
          {(location.state && location.state.navigateMessage) && `- ${location.state.navigateMessage}`}
        </small>
        <hr className='my-3'/> 
        <Form.Group className='text-end'>
          <small className='float-start'>
            <Link to='/signin'>Already have</Link>
          </small>
          <Button className='ms-2' size='sm' onClick={_ => 
            resetForm()
          }>Reset</Button>
          <Button className='ms-2' size='sm' disabled={requesting} onClick={_ => {
            const user = checkUser(setRequesting)
            if (user) {
              signUpUser(user, navigate, setRequesting)
            }
          }}>
            {requesting && <><Spinner animation="border" variant="light" size='sm'/></>} Sign Up
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SignUp