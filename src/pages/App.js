import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Home from './Home/Home';
import Process from './Process/Process';
import Complete from './Complete/Complete';
import NotFound from './NotFound/NotFound';


function App() {

  return (
    <div className="App">
      <section className='app-section'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/process" element={<Process />}/>
          <Route path="/complete" element={<Complete />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
