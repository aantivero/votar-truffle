var Eleccion = artifacts.require('./Eleccion.sol');

contract("Eleccion", function(cuentas) {

    var eleccionInstancia;

    it("Inicializar con solo 2 candidatos", function() {
        return Eleccion.deployed().then(function (instancia) {
            return instancia.cantidadCandidatos();
        }).then(function(cantidad) {
            assert.equal(cantidad, 2);
        });
    });

    it("Inician con los valores correctos", function() {
        return Eleccion.deployed().then(function (instancia) {
            eleccionInstancia = instancia;
            return eleccionInstancia.candidatos(1);
        }).then(function(candidato) {
            assert.equal(candidato[0], 1, 'id correcto');
            assert.equal(candidato[1], 'Juan', 'nombre correcto');
            assert.equal(candidato[2], 0, 'votos correctos');
            return eleccionInstancia.candidatos(2);
        }).then(function(candidato) {
            assert.equal(candidato[0], 2, 'id correcto');
            assert.equal(candidato[1], 'Pedro', 'nombre correcto');
            assert.equal(candidato[2], 0, 'votos correctos');
        });
    });
});