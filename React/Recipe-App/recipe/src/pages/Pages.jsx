import Home from "./Home";
import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import {AnimatePresence} from 'framer-motion';

// Stuff gets rendered here, use rfce
function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={ <Home/> } />
        {/* ! Only looks for /cuisine...! Doesn't look what's after. -> Will be American, Italian, etc. */}
        <Route path="/cuisine/:type" element={ <Cuisine/> }/>
        <Route path="/searched/:search" element={<Searched/>}/>
        <Route path="/recipe/:id" element={<Recipe/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;