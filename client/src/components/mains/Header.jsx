import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import Button from 'react-bootstrap/esm/Button'
import Dropdown from 'react-bootstrap/Dropdown'

import PassChangeModal from '../modals/PassChangeModal'

import signOutUser from "../../functions/requests/signOutUser"
import deleteAccount from '../../functions/requests/deleteAccount'

const Header = ({auth, user}) => {
    const navigate = useNavigate()
    const [showPassChangeModal, setShowPassChangeModal] = useState(false)

    return (
        <>
            <header className='bg-secondary text-light rounded p-4 mt-2 border-top border-primary border-primary'>
                <h1>Note Picker</h1>
                <div className='d-flex justify-content-between'>
                    <Button size='sm' disabled className='ps-0 btn-secondary'>To pick notes!</Button>
                    {auth && <Dropdown>
                        <Dropdown.Toggle size='sm'>
                            {user.name} <i className='fa fa-user text-light'></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={_ => setShowPassChangeModal(true)}><small>Change Password</small></Dropdown.Item>
                            <Dropdown.Item onClick={_ => deleteAccount(navigate)}><small>Delete Account</small></Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item onClick={_ => signOutUser(navigate)}><small>Sign Out</small></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                </div>
            </header>
            <PassChangeModal show={showPassChangeModal} onHide={_ => setShowPassChangeModal(false)}/>
        </>
    )
}

export default Header 