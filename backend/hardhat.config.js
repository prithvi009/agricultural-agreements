require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
const env = require("dotenv");
env.config();

module.exports = {
  solidity: "0.8.19",
  networks:{
    polygon_mumbai:{
      url : `https://polygon-mumbai.g.alchemy.com/v2/e9_SeR94lxBLNy-iK62SLq7H9qv8LSmJ`,
      accounts: [`8c61e3d0d3070ce80f5b5d933b6e90a627c2262081195212df5356d9e09bdc0c`],
    }
  },
};
