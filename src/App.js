import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BoardMembers from "./pages/BoardMembers";
import Announcements from "./pages/Announcements";
import ReachUs from "./pages/ReachUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hakkimizda" element={<AboutUs />} />
        <Route path="/Yonetim-Kurulumuz" element={<BoardMembers />} />
        <Route path="/Duyurular" element={<Announcements />} />
        <Route path="/Iletisim" element={<ReachUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
