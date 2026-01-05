import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./compound/Home";
import Signin from "./compound/Signin";
import Dashboard from "./compound/Dashboard";


const App = () => {
  return (
    
  <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/signin" element={<Signin />} />
      </Routes>



      </BrowserRouter>


  )
}

export default App