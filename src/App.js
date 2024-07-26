// src/App.js
import React from "react";
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
