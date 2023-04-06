import { useEffect, useState } from "react";
import { ethers } from "ethers";
import chai from "./contract/chai.json";
import "./index.scss";
import "./App.scss";

const VITE_CHAI_CONTRACT_ADDRESS = import.meta.env.VITE_CHAI_CONTRACT_ADDRESS;

import { BuyChai } from "./components/BuyChai/BuyChai.jsx";
import { Memos } from "./components/Memos/Memos.jsx";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    chaiContract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          const { ethereum } = window;

          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          const web3Provider = new ethers.providers.Web3Provider(ethereum);
          const signer = web3Provider.getSigner();
          const chaiContract = new ethers.Contract(
            VITE_CHAI_CONTRACT_ADDRESS,
            chai.abi,
            signer
          );

          setState({ provider: web3Provider, signer, chaiContract });
        } catch (error) {
          console.log("Error", error);
        }
      }
    };
    connectWallet();
  }, []);
  console.log("state", state);
  return (
    <div className="app--conatiner">
      <h1 className="a">Get started with chaipilao Dapp</h1>
      {/* <BuyChai chaiContractInst={state} /> */}
      <Memos chaiContractInst={state} />
    </div>
  );
}

export default App;
