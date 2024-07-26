import { useEffect, useState } from "react";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Home from "../src/pages/Home/Home";
import Products from "../src/pages/Products/Products";

import ProductDetails from "./pages/ProductDetails/ProductDetails";

import AOS from "aos";
import "aos/dist/aos.css";
import Error from "./pages/Error";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      debounceDelay: 50,

      once: false,
      mirror: true,
    });
  }, []);

  const [bg, setbg] = useState("#0358d6");

  return (
    <div className="app-cls" style={{ background: bg }}>
      <div className="app-cls-inside">
        <Routes>
          <Route path="/" element={<Home setbg={setbg} />} />

          <Route path="/products" element={<Products setbg={setbg} />} />

          <Route
            path="/products/:productId"
            element={<Products setbg={setbg} />}
          />
          <Route
            path="/product-details/:productId"
            element={<ProductDetails setbg={setbg} />}
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
