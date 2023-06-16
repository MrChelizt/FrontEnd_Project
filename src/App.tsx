import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Brand from "./pages/Brand";
import Sustainability from "./pages/Sustainability";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
