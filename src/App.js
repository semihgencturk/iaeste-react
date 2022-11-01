import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BoardMembers from "./pages/BoardMembers";
import Announcements from "./pages/Announcements";
import ReachUs from "./pages/ReachUs";
import ForCompanies from "./pages/ForCompanies";
import ForStudents from "./pages/ForStudents";
import CommonQuestions from "./pages/CommonQuestions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hakkimizda" element={<AboutUs />} />
        <Route path="/Yonetim-Kurulumuz" element={<BoardMembers />} />
        <Route path="/Duyurular" element={<Announcements />} />
        <Route path="/Iletisim" element={<ReachUs />} />
        <Route path="/Sirketler-Icin-Iaeste" element={<ForCompanies />} />
        <Route path="/Ogrenciler-Icin-Iaeste" element={<ForStudents />} />
        <Route path="/Sikca-Sorulan-Sorular" element={<CommonQuestions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
