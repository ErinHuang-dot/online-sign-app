import React from 'react';
import './process.scss';
import jsonData from '../../data/data.json';
import Header from "../../components/Header/Header";

export default function Process() {
  const url = process.env.PUBLIC_URL
  const appData = jsonData.ProcessBar;
  // const btnClose =  document.querySelector('.btnClose');

  // function closeModal() {
  //   document.querySelector('modal').style.display = 'none';
  // }

  return (
    <>
      <Header />
      <div className='process'>
        <section className='process-bar'>
          <ol className='process-bar-list'>
            { appData ? appData.map((item) => {
              return (
                <li className="process-item" key={item.id}>
                  {item.isDone ? <img src={url + './images/check.png'} alt=""/> 
                  : item.isCurrent ? <img src={url + item.currentImage} alt=""/>
                  : <img src={url + item.defaultImage} alt=""/>}
                  <p>{item.title}</p>
                  <span></span>
                </li>
              )})
            : 'loading'}         
          </ol>            
        </section>       
        <section className='process-review'>
          <div className='container'>
            <div className='process-review-start'>

            </div>
            <div className='process-review-end'>
              <div className='process-review-end-top'>
                <form method='post' className='process-review-form'>
                  <h5>基本資料</h5>
                  <p>                    
                    <input type='name' id='name' placeholder='請輸入您的姓名' />
                    <label for='name'></label>
                  </p>
                  <p>                  
                    <input type='email' id='email' placeholder='請輸入您的電子信箱' />
                    <label for='email'></label>
                  </p>              
                </form>
                <div className='process-review-create'>
                  <h5>我的簽名</h5>
                  <button type='button' className='btn btn-l btn-outlined btn-icon'>
                    <span className="material-symbols-outlined md-24">add</span>
                    創建簽名檔
                  </button>
                </div>
                <div className='process-review-invite'>
                  <h5>邀請簽署人</h5>
                  <button type='button' className='btn btn-outlined btn-square'>
                    <span className="material-symbols-outlined md-24">person_add</span>
                  </button>
                </div>
              </div>              
              <button className='btn btn-l btn-negative'>下一步</button>
            </div>
          </div>
        </section>     
      </div>
      <div className='modal hidden'>
        <div className='modal-container'>
          <div className='modal-header'>
            <span 
              class="material-symbols-outlined md-24 btn-close"
              >close</span>
            <div className='modal-tag-group'>
              <p className='modal-tag current-tag'>輸入</p>
              <p className='modal-tag'>手寫</p>
              <p className='modal-tag'>上傳</p>
            </div>
          </div>
          <div className='modal-body'>
            <div className='btn-font-select'>
              <button type='button' className='btn btn-s btn-outlined'>思源黑體</button>
              <button type='button' className='btn btn-s btn-outlined'>思源宋體</button>
              <button type='button' className='btn btn-s btn-outlined'>辰於落燕體</button>
            </div>
            <div className='canvas'>
              <p>請在這裡輸入您的簽名</p>
              <div className='btn-color-select'>
                <button type='button' className='btn-color btn-color-black current-color'></button>
                <button type='button' className='btn-color btn-color-blue'></button>
                <button type='button' className='btn-color btn-color-red'></button>
            </div>
            </div>
          </div>
          <div className='modal-footer'>
            <h5>我了解這是一個具法律效力的本人簽名</h5>
            <button type='button' className='btn btn-m btn-negative'>儲存</button>
          </div>
        </div>
      </div>
    </>
  )
}