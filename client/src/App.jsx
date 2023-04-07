import { useContext } from "react";
// import { Link } from "react-router-dom";
import "./index.scss";
import "./App.scss";
import { WalletContext } from "./contexts/WalletProvider.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

function App() {
  const { connectWallet, checkUserLoginStatus } = useContext(WalletContext);

  const userLoginStatus = checkUserLoginStatus();

  return (
    <div className="app--conatiner">
      <h1 className="a">Get started with chaipilao Dapp</h1>
      {!userLoginStatus && (
        <button onClick={() => connectWallet()}>Connect wallet</button>
      )}
      <Navigation parentCss={{ justifyContent: "center" }} />
      {/* {userLoginStatus && (
        <section class="routes-section--container">
          <div class="routes-section__link">
            <Link to="/">Home</Link>
          </div>
          <div class="routes-section__link">
            <Link to="/buy-chai">Buy Chai</Link>
          </div>
          <div class="routes-section__link">
            <Link to="/donation">Donation</Link>
          </div>
        </section>
      )} */}
    </div>
  );
}

export default App;
