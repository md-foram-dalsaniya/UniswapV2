require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
      },
      {
        version: "0.6.2",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.5.0",
      },
      {
        version: "0.8.0",
      },
      {
        version: "0.8.9",
      },
    ],
  },


  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/fdddd9ad3ffb4add9a6a214dbd2d199e",
      accounts:["b11c66c40ff44fca0f3e5cac1c5548091c4bdc973a94b7e72c5f5051c96c6579"]
    }
  },
};
