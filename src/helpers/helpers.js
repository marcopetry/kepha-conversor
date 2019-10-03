export const litroOnca = (litro) => {
    return litro * 33.814;
}

export const litroGalao = (litro) => {
    return litro / 3.785;
}

export const metroMilha = (metro) => {
    return metro / 1609.344;
}

export const metroPes = (metro) => {
    return metro * 3.281;
}

export const quiloLibras = (quilo) => {
    return quilo * 2.205;
}

export const quiloOncas = (quilo) => {
    return quilo * 35.274;
}

export const celsiusKelvin = (graus) => {
    return (graus * 1 + 273);
}

export const celsiusFahrenheit = (graus) => {
    return (1.8 * graus + 32.0);
}

export const validaEntrada = (entrada, unidade) => {
    if(entrada === '0')
        return false;

    if(entrada < 0 && unidade !== 'graus')
        return false;

    return true;
}

//unidade === 'litro' || unidade === 'metro' || unidade === 'quilo'