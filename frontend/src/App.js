import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/home";
import Products from "./components/products";
import About from "./components/about";
import Contact from "./components/contact";
import Add from "./components/AddProduct";


const App = () => {
  return (
    
    <BrowserRouter>
    
      <div>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addproduct" element={<Add />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
