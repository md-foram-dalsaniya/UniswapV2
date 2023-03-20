const hre = require("hardhat");

async function main() {
  const addressFeeToSetter = "0x6C141B85847fc766577afce1DDf5B8d02264653C";
  const Amm = await hre.ethers.getContractFactory("UniswapV2Factory");
  const amm = await Amm.deploy(addressFeeToSetter);

  await amm.deployed();

  const SimpleRouter = await hre.ethers.getContractFactory("UniswapRouter");
  const simpleRouter = await SimpleRouter.deploy(amm.address);

  await simpleRouter.deployed();

  console.log(`Factory deployed to: ${amm.address}`);
  console.log(`Router deployed to: ${simpleRouter.address}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//Factory deployed to: 0xd136fe563B5Fa85e001e10ddb358f01d57EF2799
//Router deployed to: 0x976562C281F8cFEE83104B61461aE65aaa099E58
