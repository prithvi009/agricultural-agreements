var AgriculturalAgreement = artifacts.require("./AgriculturalAgreement.sol");

module.exports = function(deployer) {
    deployer.deploy(AgriculturalAgreement);
    };