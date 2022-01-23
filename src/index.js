import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./reduxToolkit/index";

import "./index.css";
import MainPage from "./pages/MainPage";
import App from "./components/App/App";
import { TO_DO_PAGE, MAIN_PAGE } from "./constants/url";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path={TO_DO_PAGE} element={<App />} />
        <Route exact path={MAIN_PAGE} element={<MainPage />} />
      </Routes>
    </BrowserRouter>{" "}
  </Provider>,
  document.getElementById("root")
);
