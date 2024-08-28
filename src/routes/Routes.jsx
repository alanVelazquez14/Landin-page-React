import React from "react";
import {
  BrowserRouter,
  Navigate,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import Products from "../pages/Products/Products.jsx";
import Nosotros from "../pages/Nosotros/Nosotros.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "/src/pages/Login/Login.jsx";
import Navbar from "../components/Navbar/Navbar";
import PageNotFound from "../pages/PageNotFound/PageNotFound.jsx";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <ReactDomRoutes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<PageNotFound/>}/>
      </ReactDomRoutes>
    </BrowserRouter>
  );
}

export default Routes;
