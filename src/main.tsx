import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from "./pages/Men.tsx";
import Women from "./pages/Women.tsx";
import Kids from "./pages/Kids.tsx";
import Cart from "./pages/Cart.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
