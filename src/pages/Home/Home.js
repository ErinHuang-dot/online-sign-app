import { React, useState, useEffect } from 'react';
import './home.scss';
import jsonData from '../../data/data.json';
import Header from '../../components/Header/Header';
import Upload from '../../components/Upload/Upload';
import Steps from '../../components/Steps/Steps';

export default function Home() {
  const [appData, setAppData ] = useState({});
  useEffect(() => {
    setAppData(jsonData);
  }, []);

  return (
    <>
      <Header />
      <Upload />
      <Steps data={appData.Steps}/>
    </>
  )
}