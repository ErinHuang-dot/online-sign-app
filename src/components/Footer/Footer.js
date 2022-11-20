import React from 'react';
import './footer.scss';

export default function Footer() {
  return(
    <footer className='footer'>
      <div className='container'>
        <div className='footer-body'>
          <p>@ 2022 The F2E 4th</p>
          <div className='footer-btn-group'>
            <button className='btn btn-m btn-lan'><strong>繁中</strong></button>
            <button className='btn btn-m btn-lan'>English</button>
          </div>
        </div>
      </div>
    </footer>
  )
}