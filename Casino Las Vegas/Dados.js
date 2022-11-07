"use strict";
exports.__esModule = true;
exports.Dados = void 0;
var RLS = require("readline-sync");
var fs = require('fs');
var colores = require('colors');
var Dados = /** @class */ (function () {
    function Dados(pDado1, apuestaI) {
        this.dado = pDado1;
        this.resultado1 = 0;
        this.resultado2 = 0;
        this.apuestaInicial = apuestaI;
    }
    Dados.prototype.lanzarDados = function () {
        this.dado = Math.floor((Math.random()) * (6 - 1 + 1) + 1);
        return this.dado;
    };
    Dados.prototype.lanzarJugada = function () {
        var resultado;
        resultado = this.lanzarDados() + this.lanzarDados();
        return resultado;
    };
    Dados.prototype.jugarDados = function () {
        var apuesta = parseInt(RLS.question(colores.brightGreen.italic("--------Ingrese su apuesta------- \n")));
        if (apuesta >= 10000) {
            var lanzar1 = RLS.question(colores.brightGreen.italic('----Ingrese una opcion' + '\n' + 'Lanzar ===> ' + colores.brightYellow('1') + '\n' + 'Desistir lanzamiento ===>' + colores.brightYellow('2') + '\n'));
            switch (lanzar1) {
                case "1":
                    this.resultado1 = this.lanzarJugada();
                    console.log(colores.brightGreen.italic("El resultado del primer lanzamiento fue de"), colores.brightYellow.bold(this.resultado1));
                    this.resultado2 = this.lanzarJugada();
                    console.log(colores.brightGreen.italic("El resultado del segundo lanzamiento fue de"), colores.brightYellow.bold(this.resultado2));
                    if (this.resultado1 == this.resultado2) {
                        this.apuestaInicial = this.apuestaInicial * 2;
                        console.log(colores.brightYellow.italic.bold("Felicitaciones!!!**** Ganó el premio Mayor ****** de $"), colores.brightGreen.italic.bold(this.apuestaInicial));
                    }
                    else {
                        console.log(colores.red.italic.bold("******** Perdió el Juego ******"));
                    }
                    break;
                case "2":
                    console.log(colores.black.bold.italic("**** !!! Gracias por elegir jugar a los Dados!!!!!! *******"));
                    break;
            }
        }
        else {
            console.log(colores.red.italic.bold("Su apuesta es insuficiente"));
            var apuestaNueva = RLS.question(colores.brightBlue.italic("-------- Desea ingresar otra apuesta?") + colores.green.italic("SI") + colores.brightYellow.italic.bold("1") + "\n" + ("NO") + colores.brightYellow.italic.bold("1") + "\n");
            switch (apuestaNueva) {
                case "1":
                    this.jugarDados();
                    break;
                case "2":
                    console.log(colores.blue.italic.bold("Salió del juego"));
                    break;
            }
        }
    };
    return Dados;
}());
exports.Dados = Dados;
