require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/**
 * How to add GOERLI network to metamask
 * https://chainlist.org/?search=goerli
 * 
 */
const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY]
    }
}
};
