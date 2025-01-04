import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css'
import Home from "./components/Home/Home";
import Layout from "./Layout";
import Overview from "./components/Overview/Overview";
import ChatComponent from "./components/Home/Chat";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/overview" element={<Overview/>} />
            <Route path="/chat" element={<ChatComponent/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
