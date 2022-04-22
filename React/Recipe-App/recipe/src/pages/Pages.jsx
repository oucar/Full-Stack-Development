import Home from "./Home";
import React from 'react';
import { Route, Routes } from "react-router-dom";

// Stuff gets rendered here, use rfce
function Pages() {
  return (
    <div>
        <Routes>
          <Home/>
        </Routes>
    </div>
  )
}

export default Pages