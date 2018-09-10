var Eleccion = artifacts.require('./Eleccion.sol');

contract("Eleccion", function(accounts) {

    it("Inicializar con solo 2 candidatos", function() {
        return Eleccion.deployed().then(function (instance) {
            return instance.cantidadCandidatos();
        }).then(function(cantidad) {
            assert.equal(cantidad, 2);
        });
    });
});