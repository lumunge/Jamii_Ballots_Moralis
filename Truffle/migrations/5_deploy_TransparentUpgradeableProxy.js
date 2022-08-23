const TransparentUpgradeableProxy = artifacts.require(
  "TransparentUpgradeableProxy"
);

module.exports = function (deployer) {
  deployer.deploy(TransparentUpgradeableProxy);
};
