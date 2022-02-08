import { modulo10, modulo11Bancario } from "./modulos.js";
import { convertToBoletoBancario } from "./conversores.js";

function boletoBancarioCodigoBarras(barCode) {
    if (!/^[0-9]{44}$/.test(barCode)) 
        return false;

    const DV = barCode[4];
    const bloco = barCode.substring(0, 4) + barCode.substring(5);

    return modulo11Bancario(bloco) === Number(DV);
}

function boletoBancarioLinhaDigitavel(barCode) {
    if (!/^[0-9]{47}$/.test(barCode))
        return false;

    const blocos = [
        {
            num: barCode.substring(0, 9),
            DV: barCode.substring(9, 10),
        },
        {
            num: barCode.substring(10, 20),
            DV: barCode.substring(20, 21),
        },
        {
            num: barCode.substring(21, 31),
            DV: barCode.substring(31, 32),
        },
    ];

    const validBlocos = blocos.every(e => modulo10(e.num) === Number(e.DV))
    const validDV = boletoBancarioCodigoBarras(convertToBoletoBancario(barCode));
    return validBlocos && validDV;
}

export function isValidBoletoBancario(barCode) {
    let isValid = false;
    
    if (barCode.length === 44) {
        isValid = boletoBancarioCodigoBarras(barCode);
    }
    else if (barCode.length === 47) {
        isValid = boletoBancarioLinhaDigitavel(barCode);
    }

    const valor = barCode.substring(37, 47);
    const fatorVencimento = barCode.substring(33, 37);

    if (isValid) {
        return {
            barCode,
            valor,
            fatorVencimento
        }
    }
    
    return isValid;
}
