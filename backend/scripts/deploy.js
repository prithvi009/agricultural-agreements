// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {

  const AgriAgreement = await ethers.getContractFactory("AgriculturalAgreement")
  const  agriContract= await AgriAgreement.deploy();
  

  console.log(
    "AgriculturalAgreement deployed to:",
    agriContract.address
  );
}


//0xcA9074CF31e703B59a6Afb59e8D6169Dd2B70729
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


