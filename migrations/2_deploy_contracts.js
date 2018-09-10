var Eleccion = artifacts.require("./Eleccion.sol");

module.exports = function(deployer) {
    deployer.deploy(Eleccion);
};