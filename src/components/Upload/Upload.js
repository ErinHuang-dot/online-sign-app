import React from 'react';
// import { Link } from 'react-router-dom';
import './upload.scss';

export default function Upload() {
  const url = process.env.PUBLIC_URL
  // const fileUploader = document.querySelector('#file-uploader');
  // fileUploader.addEventListener('change', (e) => {
  //   console.log(e.target.files);
  //   const file = e.target.files[0];
  //   if (!file) {
  //     return <Link to='/notfound'/>
  //   } else {
  //     return <Link to='/process'/>
  //   }  
  // })
  

  return (
    <section className='upload'>
      <div className='container'>
        <div className='upload-body'>
          <div className='upload-content'>
            <img src={url + './images/ill-add-file.svg'} alt='' className='add-file-img'/>
            <p>將檔案拖曳至這裡，或</p>
            <form id='upload-form'>
              <label className='btn btn-primary btn-upload' for='file-uploader'>選擇檔案</label>
              <input 
                type='file'
                id="file-uploader"
                data-target="file-uploader" 
                accept=".png, .jpg, .jpeg, .pdf"
                >
              </input>       
            </form>
            <h5>檔案大小10Mb以內，檔案格式為PDF、IMG</h5>
          </div>       
        </div>
      </div>
    </section>
  )
}