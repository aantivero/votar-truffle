pragma solidity ^0.4.24;

contract Eleccion {

    // modelar un candidato
    struct Candidato {
        uint id;
        string nombre;
        uint votos;
    }
    // guardar y obtener candidatos
    mapping(uint => Candidato) public candidatos;

    // guardar la cantidad de candidatos
    //en solidity no podemos saber el tamaño del array y no se puede iterar
    //no se puede saber el tamaño de candidatos
    uint public cantidadCandidatos;


    //constructor
    constructor() public {
        agregarCandidato("Juan");
        agregarCandidato("Pedro");
    }

    //esta función es accesible desde fuera
    function agregarCandidato(string _nombre) private {
        cantidadCandidatos ++;
        candidatos[cantidadCandidatos] = Candidato(cantidadCandidatos, _nombre, 0);
    }
}
