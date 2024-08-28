const hre = require("hardhat");

/**
 * Command to run this script
 * `$npx hardhat run scripts/deploy.js
 */
async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const chai = await hre.ethers.getContractFactory("Chai");
  const contract = await chai.deploy(); // Instance of contract

  await contract.deployed();
  console.log("\n\nContract deployed to:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
