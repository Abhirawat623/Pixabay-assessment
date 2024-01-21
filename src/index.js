import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {
  SearchedImageProvider,
  AlertProvider,
  AuthProvider,
} from "./Context/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AlertProvider>
        <SearchedImageProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </SearchedImageProvider>
      </AlertProvider>
    </Router>
  </React.StrictMode>
);
