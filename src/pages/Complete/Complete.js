import React from 'react';
import './complete.scss';
import { Link } from 'react-router-dom';

export default function Complete() {
  const url = process.env.PUBLIC_URL

  return (
    <div className='complete footer-else-h'>
      <div className='container'>
        <div className='complete-content'>
          <img src={url + '/images/ill-shared-goals.svg'} alt=''/>
          <div className='complete-text'>
            <h2>恭喜您！檔案已就緒 </h2>
            <p>現在您可以下載檔案或註冊會員，以體驗更多功能。</p>
            <Link to='/' className='btn btn-primary next-link'>
              下載檔案
            </Link>
            <Link to='/' className='btn btn-secondary next-link'>
              註冊
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}