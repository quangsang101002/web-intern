import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/product/Product";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";
import ScrollToTop from "./Components/scrollToTop";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/product" element={<Products />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
