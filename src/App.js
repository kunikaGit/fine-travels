
import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import config from './config/config';
import Home from './components/home';

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path={`${config.baseUrl}`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;