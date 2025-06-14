import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { GigaContact, GigaHome, GigaSocial, GigaSponsors } from "@views/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GigaHome />}></Route>
        <Route path="/sponsors" element={<GigaSponsors />}></Route>
        <Route path="/social" element={<GigaSocial />}></Route>
        <Route path="/contact" element={<GigaContact />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
