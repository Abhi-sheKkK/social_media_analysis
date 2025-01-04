import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css'
import Home from "./components/Home/Home";
import Layout from "./Layout";
import Overview from "./components/Overview/Overview";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/overview" element={<Overview/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
