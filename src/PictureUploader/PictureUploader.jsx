import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';

function PictureUploader() {

  const [file, setFile] = useState(null);

  const onChangeInput = (e) => {
    console.log(e.target.files)
    setFile(e.target.files[0]);
  }

  const submitFile = (e) => {
    e.preventdefault();

    const data = new FormData();

    data.append('file', file);

    axios.post('//localhost:8000/upload', data)
      .then((e) => {
        toast.success('Upload Successful');
      })
      .catch((e) => {
        toast.error('Upload Failed');
      })
  }

  return (
    <div className='pictureUploadContainer'>

      <form onSubmit={submitFile}>

        <div className="custom-file">

          <input type="file" id="formFile" className="file" onChange={onChangeInput} />
          <label htmlFor="formFile">Select File</label>
        </div>

      </form>
    </div>
  )
}

export default PictureUploader