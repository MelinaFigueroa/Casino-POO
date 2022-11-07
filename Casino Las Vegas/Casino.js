"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var QuienQuiereSerMillonario_1 = require("./QuienQuiereSerMillonario");
var RuletaDeLaFortuna_1 = require("./RuletaDeLaFortuna");
var BlackJack_1 = require("./BlackJack");
var Dados_1 = require("./Dados");
var fs = require('fs');
var colors = require('colors/safe');
var colores = require('colors');
var Casino = /** @class */ (function () {
    function Casino() {
        this.tragamonedas1 = new QuienQuiereSerMillonario_1.QuienQuiereSerMillonario();
        this.tragamonedas2 = new RuletaDeLaFortuna_1.RuletaDeLaFortuna();
        this.blackJack = new BlackJack_1.BlackJack();
        this.dados = new Dados_1.Dados(1, 500000);
    }
    Casino.prototype.manipular = function (nombre, texto) {
        fs.writeFile(nombre, texto, function (error) {
            if (error) {
                console.log('ERROR');
            }
            else {
                console.log('SE CREO EL ARCHIVO');
            }
        });
    };
    Casino.prototype.modificarArchivo = function (nombre, texto) {
        this.manipular(nombre, texto);
    };
    Casino.prototype.leerArchivo = function (path) {
        var txtFile = fs.readFileSync(path, 'utf-8');
        return txtFile;
    };
    Casino.prototype.ingresar = function () {
        var readlineSync = require('readline-sync');
        var ingresar = 1;
        var opcion = 1;
        while (ingresar == 1) {
            console.log(colors.magenta(' **** Elija el juego que quiere jugar **** ' + '\n' + '\n'));
            opcion = parseInt(readlineSync.question(colores.yellow('1- QuienQuiereSerMillonario' + '\n' + '2- Rueda de la fortuna' + '\n' + '3- Black Jack' + '\n' + '4- Dados' + '\n')));
            var otraVez = 1;
            switch (opcion) {
                case 1:
                    console.log("su probabilidad de Ganar es: %" + this.tragamonedas1.getProbabilidad() + " por Tiro");
                    while (otraVez == 1) {
                        console.log(this.tragamonedas1.jugar());
                        otraVez = parseInt(readlineSync.question(" ¿Desea jugar Otra Vez? 1-SI || 2-NO \n"));
                    }
                    break;
                case 2:
                    console.log("su probabilidad de Ganar es: %" + this.tragamonedas2.getProbabilidad() + " por Tiro");
                    while (otraVez == 1) {
                        console.log(this.tragamonedas2.jugar());
                        otraVez = parseInt(readlineSync.question("¿Desea jugar Otra Vez? 1-SI || 2-NO \n"));
                    }
                    break;
                case 3:
                    while (otraVez == 1) {
                        this.blackJack.jugar();
                        otraVez = parseInt(readlineSync.question("¿Desea jugar Otra Vez? 1-SI || 2-NO \n"));
                    }
                    break;
                case 4:
                    while (otraVez == 1) {
                        this.dados.jugarDados();
                        otraVez = parseInt(readlineSync.question(" ¿Desea jugar Otra Vez? 1-SI || 2-NO \n"));
                    }
                    break;
                default:
                    break;
            }
            ingresar = readlineSync.question("¿Desea salir del casino? 1-NO || 2-SI \n");
        }
    };
    return Casino;
}());
exports.Casino = Casino;
