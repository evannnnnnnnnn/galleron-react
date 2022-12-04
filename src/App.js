import React, { useEffect, useState } from 'react';
import "./static.css"
import Blog from './coponent/Blog';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecherchesRecettes from './coponent/RecherchesRecettes';
import NoPage from './coponent/NoPage';
import Menu from './coponent/Menu';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<RecherchesRecettes />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
};




export default App;