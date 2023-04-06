import React from "react";
import ReactDOM from "react-dom/client";
import { ChaiProvider } from "./contexts/ChaiProvider";
import { WalletProvider } from "./contexts/WalletProvider";
import App from "./App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WalletProvider>
      <ChaiProvider>
        <App />
      </ChaiProvider>
    </WalletProvider>
  </React.StrictMode>
);
