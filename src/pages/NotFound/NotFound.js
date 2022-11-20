import React from 'react';
import './notfound.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const url = process.env.PUBLIC_URL

  return (
    <div className='error footer-else-h'>
      <div className='container'>
        <div className='error-content'>
          <img src={url + '/images/ill-wrong.svg'} alt=''/>
          <div className='error-text'>
            <h2>您的檔案無法上傳</h2>
            <p>請重新上傳檔案。確認檔案大小在10Mb以內，檔案格式為PDF、IMG。
若還是無法上傳檔案，請聯繫123456@gmail.com</p>
            <Link to='/' className='btn btn-primary next-link'>
              回首頁
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}