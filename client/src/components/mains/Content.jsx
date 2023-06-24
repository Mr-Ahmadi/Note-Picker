import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import UploadModal from "../modals/UploadModal"
import listFiles from '../../functions/requests/listFiles'
import File from '../elements/File'
import Loading from '../elements/Loading'

const Content = _ => {
  const [files, setFiles] = useState(null)
  const [showUploadModal, setShowUploadModal] = useState(false)
  useEffect(_ => {
    listFiles(setFiles)
  }, [])
  return (
    <>
      <div className='mb-2'>
        <div>
          <Button size='sm' onClick={_ => setShowUploadModal(true)} className='my-2'>Upload File <i className="fa fa-solid fa-upload"></i></Button>
        </div>
        <div className='row m-0'>
          {(files === null) 
            ? <Loading />
            : (files.length === 0) 
              ? <label className='h1 p-5 text-light'><span className='text-danger'>No</span> file uploaded :(</label>
              : files.sort((a,b) => a.originalname.localeCompare(b.originalname)).map(file => <File setFiles={setFiles} file={file} key={file._id}/>)
          }
        </div>
      </div>
      <UploadModal show={showUploadModal} onHide={_ => setShowUploadModal(false)} setFiles={setFiles}/>
    </>
  )
}

export default Content