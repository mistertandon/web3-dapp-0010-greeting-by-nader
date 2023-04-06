import React from "react";
import ReactDOM from "react-dom/client";
import { ChaiProvider } from "./contexts/ChaiProvider";
import App from "./App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChaiProvider>
      <App />
    </ChaiProvider>
  </React.StrictMode>
);
