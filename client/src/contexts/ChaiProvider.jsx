import { useState, createContext, useContext } from "react";
import { WalletContext } from "./WalletProvider";
const ChaiContext = createContext({});

const ChaiProvider = ({ children }) => {
  const {
    walletState: { chaiContract },
  } = useContext(WalletContext);

  const [donationList, setDonationList] = useState([]);

  const fetchDonationsList = async () => {
    const _donationList = await chaiContract.getMemos();
    setDonationList(_donationList);
  };

  return (
    <ChaiContext.Provider
      value={{
        donationList,
        fetchDonationsList,
      }}
    >
      {children}
    </ChaiContext.Provider>
  );
};

export { ChaiContext, ChaiProvider };
