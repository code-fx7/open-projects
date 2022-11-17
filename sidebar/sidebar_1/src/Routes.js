import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/statistics">
          <h1>Statistics Page</h1>
        </Route>
        <Route exact path="/customers">
          <h1>Customers Page</h1>
        </Route>
        <Route exact path="/diagrams">
          <h1>Diagrams Page</h1>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;