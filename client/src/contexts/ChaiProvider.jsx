import { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";
const VITE_CHAI_CONTRACT_ADDRESS = import.meta.env.VITE_CHAI_CONTRACT_ADDRESS;
import chai from "./../contract/chai.json";

const ChaiContext = createContext({});

const ChaiProvider = ({ children }) => {
  const [walletState, setWalletState] = useState({
    provider: null,
    signer: null,
    chaiContract: null,
  });

  const [donationList, setDonationList] = useState([]);

  const fetchDonationsList = async () => {
    console.log("walletState", walletState);
    const { chaiContract } = walletState;
    const _donationList = await chaiContract.getMemos();
    setDonationList(_donationList);
  };

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
        // const provider = new ethers.providers.Web3Provider(ethereum);
        // const signer = provider.getSigner();
        // const chaiContract = new ethers.Contract(
        //   VITE_CHAI_CONTRACT_ADDRESS,
        //   chai.abi,
        //   signer
        // );

        // setWalletState({ provider, signer, chaiContract });
        // console.log("walletState", walletState);
        fetchDonationsList();
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  return (
    <ChaiContext.Provider
      value={{
        state: walletState,
        connectWallet,
        checkUserLoginStatus,
        donationList,
        fetchDonationsList,
      }}
    >
      {children}
    </ChaiContext.Provider>
  );
};

export { ChaiContext, ChaiProvider };
