import React, { useState } from 'react'
import {ToastContainer, toast} from 'react-toastify';

function PictureUpload() {

    const [picFile, setPicFile] = useState(null);

    const change = (e) => {
       console.log( e.target.files);

       setPicFile(e.target.files[0]);
    }

    const submitPicFile = () => {

        const data = new FormData();
        data.append('file', picFile);

        axios.post('//localhost:8000/upload', data)
        .then((e) => {
            toast.success('Upload')
        })
        .catch((e) => {
            toast.error('Upload Error')
        })
    }

  return (
    <div>
        
        <form onSubmit={submitPicFile}>

        <input type="file" id='picFile' placeholder='Choose file' onChange={change} />

        <label htmlFor="picFile"></label>

        </form>
    </div>
  )
}

export default PictureUpload