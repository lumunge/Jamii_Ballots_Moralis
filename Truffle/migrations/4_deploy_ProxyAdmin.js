const ProxyAdmin = artifacts.require("ProxyAdmin");

module.exports = function (deployer) {
  deployer.deploy(ProxyAdmin);
};
