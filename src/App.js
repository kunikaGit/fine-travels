
import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import config from './config/config';
import Home from './components/home';
import About from './components/aboutus';
import Packages from './components/packages';
import Services from './components/services';
import Contactus from './components/contactus';

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path={`${config.baseUrl}`} element={<Home />} />
        <Route path={`${config.baseUrl}aboutus`} element={<About />} />
        <Route path={`${config.baseUrl}packages`} element={<Packages />} />
        <Route path={`${config.baseUrl}services`} element={<Services />} />
        <Route path={`${config.baseUrl}contactus`} element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;