
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';



import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from './Pages/Home';



function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;



