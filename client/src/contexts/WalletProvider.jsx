import { useState, createContext } from "react";
import { ethers } from "ethers";
import chai from "./../contract/chai.json";

const VITE_CHAI_CONTRACT_ADDRESS = import.meta.env.VITE_CHAI_CONTRACT_ADDRESS;

const WalletContext = createContext({});

const WalletProvider = ({ children }) => {
  const [walletState, setWalletState] = useState({
    provider: null,
    signer: null,
    chaiContract: null,
  });

  const checkUserLoginStatus = () => {
    const { provider, signer, chaiContract } = walletState;
    // console.log(provider, signer, chaiContract);
    return provider !== null && signer !== null && chaiContract !== null
      ? true
      : false;
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const useLoginStatus = await checkUserLoginStatus();

        if (useLoginStatus) return;

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

        setWalletState({ provider: web3Provider, signer, chaiContract });
        console.log("walletState", walletState);
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  const logoutRequest = async () => {
    await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [{ eth_accounts: {} }],
    });

    setWalletState({ provider: null, signer: null, chaiContract: null });
    return;
  };

  return (
    <WalletContext.Provider
      value={{
        walletState,
        connectWallet,
        checkUserLoginStatus,
        logoutRequest,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export { WalletProvider, WalletContext };
