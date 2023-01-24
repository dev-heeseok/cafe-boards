import React from "react";
import "./assets/style/App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="cafe-boards" element={<Home />} />
          <Route path="cafe-boards/menu" element={<Menu />} />
          <Route path="cafe-boards/about" element={<About />} />
          <Route path="cafe-boards/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
