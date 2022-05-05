const { ethers } = require("hardhat");

async function main() {
    // this line of code(getContractFactory) tells hardhat to deploy the contract named whitelist in the contract folder
    const whitelistContract = await ethers.getContractFactory("Whitelist");

    // the deploy function takes in the constructor argument i.e 10 whitelist spaces
    const deployedWhitelistContract = await whitelistContract.deploy(10);

    // this line here await till the contract is deployed cause it takes time
    await deployedWhitelistContract.deployed();

    // this prints the address to the console
    console.log("Whitelist Contract Address", deployedWhitelistContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });