// src/App.js
import React, { useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPagePopUp from "./components/MainPagePopUp";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        <Route path="tb" element={<MainPagePopUp />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
