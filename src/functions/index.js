import { isValidBoletoArrecacao } from "./boletoArrecadacao.js";
import { isValidBoletoBancario } from "./boletoBancario.js";
import { converterValores } from "./conversores.js"

export function IsValid(barCode) {
    if (!barCode){
        return {
            message: "Boleto Não Informado!",
            status: "erro"
        }
    }

    if (isNaN(barCode)){
        return {
            message: "Digite Apenas Números!",
            status: "erro"
        }
    }

    let result;

    if (barCode[0] == "8"){
        result = isValidBoletoArrecacao(barCode);
    } 
    else {
        result = isValidBoletoBancario(barCode);
    }

    if (!result){
        return {
            message: "Boleto inválido!",
            status: "erro"
        }
    }

    const boleto = converterValores(result);

    return boleto;
}

