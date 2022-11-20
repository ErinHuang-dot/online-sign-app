import React from 'react';
import './steps.scss';

export default function Steps(props) {
  const url = process.env.PUBLIC_URL
  return (
    <section>
      <div className="container">
        <div className="steps-body">
          <h2 className="steps-title">輕鬆幾步驟，完成您的簽署</h2>
          <ul className="steps-element-list">
            { props.data ? props.data.map(item => {
              return (
                <li className="steps-element" key={item.id}>
                <span>{item.id}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <img src={url + item.image} alt=""/>
              </li>
              )})
            : 'loading'}
          </ul>
        </div>
      </div>
    </section>
  )
}