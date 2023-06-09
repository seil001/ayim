import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ForumContextProvider from "./contexts/ForumContextProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ForumContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ForumContextProvider>
  </BrowserRouter>
);
