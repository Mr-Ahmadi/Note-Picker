import Spinner from 'react-bootstrap/Spinner'

const Loading = _ => {
  return (
    <div className="text-center my-5 py-4">
      <Spinner animation="border" variant="primary" />
    </div>
  )
}

export default Loading