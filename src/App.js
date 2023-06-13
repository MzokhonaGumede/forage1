import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./pages/login";
import About from "./pages/about";
import Contact from "./pages/vacancy";
import Signup from "./pages/signup";
function App() {
  return (
    <Router>
      <Navbar />
          <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Signup />} />
          </Routes>
    </Router>
  );
}
export default App;