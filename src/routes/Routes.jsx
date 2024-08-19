import React from "react";
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import  {Hero}  from "../components/Hero/Hero";
import  Products  from "../pages/Products/Products.jsx";
import  Nosotros  from "../pages/Nosotros/Nosotros.jsx";
import Login from '/src/pages/Login/Login.jsx';
import Navbar from "../components/Navbar/Navbar";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <ReactDomRoutes>
        <Route path="/home" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
      </ReactDomRoutes>
    </BrowserRouter>
  );
}

export default Routes;
