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
import Contacto from "/src/pages/Contacto/Contacto.jsx";
import Navbar from "../components/Navbar/Navbar";
import PageNotFound from "../pages/PageNotFound/PageNotFound.jsx";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";
import Checkout from "../pages/CheckOut/Checkout.jsx";
import MisOrdenes from "../pages/MisOrdenes/MisOrdenes.jsx";
import Felicitaciones from "../pages/Felicitaciones/Felicitaciones.jsx";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute.jsx";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <ReactDomRoutes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contactanos" element={<Contacto />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mis-ordenes" element={<MisOrdenes />} />
        <Route path="/felicitaciones" element={<Felicitaciones />} />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute redirectTo={"/login"}>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </ReactDomRoutes>
    </BrowserRouter>
  );
}

export default Routes;
