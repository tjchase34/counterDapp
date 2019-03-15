var counter = artifacts.require("Counter.sol");

module.exports = function(deployer) {
  deployer.deploy(counter);
};
