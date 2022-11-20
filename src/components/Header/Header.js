import React from 'react';
import { useLocation } from 'react-router-dom';
import './header.scss';

export default function Header() {
  const url = process.env.PUBLIC_URL
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-body'>
          <div>
            { pathname === '/' ? 
              <img src={url + './images/fast-sign-logo.png'} alt='logo'/> 
              : 
              <h5 className='header-subtitle'>
                <span className="material-symbols-outlined md-24 header-subtitle-s">arrow_back</span>
                型號U-ew8951出貨單
                <span className="material-symbols-outlined md-18 header-subtitle-e">edit</span>
              </h5> } 
          </div>
          <h1 className='header-title'>快速省時的電子簽署工具</h1>
          <div className='btn-group'>
            <button className='btn btn-l btn-secondary'>登入</button>
            <button className='btn btn-l btn-primary'>註冊</button>
          </div>
        </div>
      </div>
    </header>
  )
}