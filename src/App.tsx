import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Brand from "./pages/Brand";
import Sustainability from "./pages/Sustainability";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
