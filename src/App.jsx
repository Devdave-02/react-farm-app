import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Investment from "./Pages/Investment";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/AboutUs" element={<MainLayout><AboutUs /></MainLayout>} />
        <Route path="/Investment" element={<MainLayout><Investment /></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;

