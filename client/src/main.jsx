import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChaiProvider } from "./contexts/ChaiProvider";
import { WalletProvider } from "./contexts/WalletProvider";
import App from "./App";
import { BuyChai } from "./components/BuyChai/BuyChai.jsx";
import { Donation } from "./components/Donation/Donation.jsx";
import { Logout } from "./components/Logout/Logout.jsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <WalletProvider>
        <ChaiProvider>
          <App />
        </ChaiProvider>
      </WalletProvider>
    ),
  },
  {
    path: "/buy-chai",
    element: (
      <WalletProvider>
        <ChaiProvider>
          <BuyChai />
        </ChaiProvider>
      </WalletProvider>
    ),
  },
  {
    path: "/donation",
    element: (
      <WalletProvider>
        <ChaiProvider>
          <Donation />
        </ChaiProvider>
      </WalletProvider>
    ),
  },
  {
    path: "/logout",
    element: (
      <WalletProvider>
        <ChaiProvider>
          <Logout />
        </ChaiProvider>
      </WalletProvider>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    {/* <RouterProvider router={router}>
      <WalletProvider>
        <ChaiProvider>
          <App />
        </ChaiProvider>
      </WalletProvider>
    </RouterProvider> */}
  </React.StrictMode>
);
