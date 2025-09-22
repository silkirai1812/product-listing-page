import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Home />   {/* Page content */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


