// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function getBalance(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

async function consoleBalances(addresses) {
  for (const address of addresses) {
    console.log(`address: ${address}, Balance: `, await getBalance(address));
  }
}

async function consoleMemos(memos) {
  for (const memoRef of memos) {
    const { name, message, timestamp, from } = memoRef;
    console.log(
      `name: ${name}, message: ${message}, \ntimestamp: ${timestamp}, \nfrom :${from}`
    );
  }
}

/**
 * Command to run this script
 * `$npx hardhat run scripts/deploy.js
 */
async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const chai = await hre.ethers.getContractFactory("chai");
  const contract = await chai.deploy(); // Instance of contract

  await contract.deployed();
  console.log("\n\nContract deployed to:", contract.address);

  const addresses = [
    owner.address,
    from1.address,
    from2.address,
    from3.address,
  ];

  console.log("\n\nBalance before buying CHAI");
  await consoleBalances(addresses);

  const amount = { value: hre.ethers.utils.parseEther("1") };
  await contract.connect(from1).buyChai("From 1", "Good Tea", amount);
  await contract.connect(from2).buyChai("From 2", "Nice Tea", amount);
  await contract.connect(from3).buyChai("From 3", "Excellant Tea", amount);

  console.log("\n\nBalance after buying CHAI");
  await consoleBalances(addresses);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
