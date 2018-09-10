pragma solidity ^0.4.24;

contract Eleccion {
    //guardar candidato
    //leer candidato por definicion al ser publica ya tiene getter
    string public candidato;

    //constructor
    constructor() public {
        candidato = "Candidato 1";
    }
}
