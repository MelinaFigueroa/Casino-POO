import { Cliente } from "./Cliente";
import { TragaMonedas } from "./TragaMonedas";

export class QuienQuiereSerMillonario extends TragaMonedas {
    private creditoMinimo: number;
    private doblarApuesta: number;
    constructor(pDoblarApuesta: number, pCreditoDisponible: number, pJugador: Cliente, pFichasCompradas: number) {
        super(pCreditoDisponible, pJugador, pFichasCompradas);
        this.creditoMinimo = 2000;
        this.doblarApuesta = pDoblarApuesta;
    }


    public jugar(): void {
        console.log("Esta jugando");
    }
    public calcularGanancia(): void {
        console.log(this.calcularGanancia());
    }

}
 