import React from "react";
import './style.css'
import Home from "./Components/Home";
import AddContact from "./Components/AddContact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddContact" element={<AddContact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
