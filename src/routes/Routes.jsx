import React from "react";
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import { Hero } from "../components/Hero/Hero";

function Routes() {
  return (
    <BrowserRouter>
      <ReactDomRoutes>
        <Route path="/" element={<Hero/>} />
      </ReactDomRoutes>
    </BrowserRouter>
  );
}

export default Routes;
