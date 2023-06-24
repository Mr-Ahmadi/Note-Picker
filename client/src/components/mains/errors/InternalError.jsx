const InternalError = ({checkAuth}) => {
  return (
    <div className="p-5 text-light">
        <h1>Internal Error :(</h1>
        <small className="pb-4">Can <span className='text-danger'>not</span> connect server</small>
        <h4 className="text-end pt-4">
            <u onClick={_ => checkAuth()} className='link-primary'>Retry</u>
        </h4>
    </div>
  )
}

export default InternalError