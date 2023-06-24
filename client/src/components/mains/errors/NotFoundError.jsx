import { Link } from 'react-router-dom'

const NotFound = ({auth}) => {
  return (
    <div className="p-5 text-light">
        <h1>Page Not Found :(</h1>
        <small className="pb-4">You {auth ? <span className='text-success'>are</span> : <span className='text-danger'>aren't</span>} already authenicated</small>
        <h4 className="text-end pt-4">
            {auth ? <Link to='/'>Main Page</Link>
            : <Link to='/signin'>Login</Link>}
        </h4>
    </div>
  )
}

export default NotFound