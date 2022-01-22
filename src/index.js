import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import MainPage from "./pages/MainPage";
import App from "./components/App/App";
import { TO_DO_PAGE, MAIN_PAGE } from "./constants/url";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path={TO_DO_PAGE} element={<App />} />
      <Route exact path={MAIN_PAGE} element={<MainPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
