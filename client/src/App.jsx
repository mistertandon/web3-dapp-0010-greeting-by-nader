import { useContext } from "react";
import "./index.scss";
import "./App.scss";
import { WalletContext } from "./contexts/WalletProvider.jsx";

import { BuyChai } from "./components/BuyChai/BuyChai.jsx";
import { Donation } from "./components/Donation/Donation.jsx";

function App() {
  const { connectWallet, checkUserLoginStatus } = useContext(WalletContext);

  const userLoginStatus = checkUserLoginStatus();

  return (
    <div className="app--conatiner">
      <h1 className="a">Get started with chaipilao Dapp</h1>
      {!userLoginStatus && (
        <button onClick={() => connectWallet()}>Connect wallet</button>
      )}
      <BuyChai />
      <Donation />
    </div>
  );
}

export default App;
