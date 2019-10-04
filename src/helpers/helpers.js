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
        
    if(entrada < 0.0000001 && unidade !== 'graus' && unidade !== '' && entrada.indexOf(' ') === -1)
        return 'Não pode colocar valores negativos para essa unidade de medida';

    //válida caracteres não numéricos e espaços
    if(isNaN(entrada*1) || entrada.indexOf(' ') !== -1)
        return 'Você inseriu caracteres não númericos e/ou espaços';   
    
    return true;
}

