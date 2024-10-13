import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlacedOrder from "./pages/PlacedOrder";
import Footer from "./components/Footer";
import LoginSetup from "./components/LoginSetup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div id="app" className="app relative">
        {showLogin ? <LoginSetup setShowLogin={setShowLogin} /> : <></>}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlacedOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
