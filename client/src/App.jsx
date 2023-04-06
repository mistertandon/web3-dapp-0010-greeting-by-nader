import { useContext } from "react";
import "./index.scss";
import "./App.scss";
import { ChaiContext } from "./contexts/ChaiProvider.jsx";

import { BuyChai } from "./components/BuyChai/BuyChai.jsx";
import { Donation } from "./components/Donation/Donation.jsx";

function App() {
  const { checkUserLoginStatus, connectWallet } = useContext(ChaiContext);

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
