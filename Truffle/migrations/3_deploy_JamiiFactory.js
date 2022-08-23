const JamiiFactory = artifacts.require("JamiiFactory");

module.exports = function (deployer) {
  deployer.deploy(JamiiFactory);
};
