import Home from "./Home";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";

// Stuff gets rendered here, use rfce
function Pages() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      {/* ! Only looks for /cuisine...! Doesn't look what's after. */}
      <Route path="/cuisine" element={ <Cuisine/> }/>
    </Routes>
  )
}

export default Pages;