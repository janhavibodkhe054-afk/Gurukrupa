import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/GalleryPage";
import Electrical from "./pages/Electrical";
import SwitchesModularAccessoriesPage from "./pages/SwitchesModularAccessoriesPage";
import LEDLightsPage from "./pages/LEDLightsPage";
import FancyLightingPage from "./pages/FancyLightingPage";
import IndustrialElectricalMaterialsPage from "./pages/IndustrialElectricalMaterialsPage";
import Brand from "./pages/Brand";



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/switches" element={<SwitchesModularAccessoriesPage />} />
        <Route path="/led-lights" element={<LEDLightsPage />} />
        <Route path="/fancy-lighting" element={<FancyLightingPage />} />
        <Route path="/industrial" element={<IndustrialElectricalMaterialsPage />} />
        <Route path="/brands" element={<Brand />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;