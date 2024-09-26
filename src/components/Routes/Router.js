import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importe todos os outros componentes de página
import Home from "../pages/Home";


import WhatsAppButton from "../pages/WhatsAppButton";

// Navbar e Footer
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



const Router = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          

          {/* Rota para a página NotFound */}
         
        </Routes>
        <WhatsAppButton />
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default Router;