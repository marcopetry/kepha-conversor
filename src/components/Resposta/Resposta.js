import React from 'react'
import { litroOnca, litroGalao, metroMilha, metroPes, quiloLibras, quiloOncas, celsiusKelvin, celsiusFahrenheit, validaEntrada } from '../../helpers/helpers'

export default function resposta(props){    

    let resposta1 = 'Aqui aparecerá a primeira resposta convertida.';
    let resposta2 = 'Aqui aparecerá a segunda resposta convertida.';
    let entrada = props.entrada;
    let unidade = props.unidade;
    let entradaValida = validaEntrada(entrada, unidade);    

    if(unidade === 'litro'){
        resposta1 = (litroOnca(entrada).toFixed(3) + ' onças americanas.');
        resposta2 = (litroGalao(entrada).toFixed(3) + ' galões americanos.');
    }

    if(unidade === 'metro'){
        resposta1 = (metroMilha(entrada).toFixed(3) + ' milhas.');
        resposta2 = (metroPes(entrada).toFixed(3) + ' pés.');
    }

    if(unidade === 'quilo'){
        resposta1 = (quiloLibras(entrada).toFixed(3) + ' libras.');
        resposta2 = (quiloOncas(entrada).toFixed(3) + ' onças.');
    }

    if(unidade === 'graus'){
        resposta1 = (celsiusKelvin(entrada).toFixed(3) + ' kelvin.');
        resposta2 = (celsiusFahrenheit(entrada).toFixed(3) + ' fahrenheit')
    }    

    if(entrada === '' || unidade === ''){
        return(
            <div></div>
        );
    }
    
    if(!entradaValida){
        return (
            <div className="container-alerts">                
                <div className="alert alert-danger col-11" role="alert">
                    Entrada Invalida
                </div>                
            </div>
        );
    } else{
        return(
            <div className="container-alerts">
                <h4>Os valores convertidos são:</h4>
                <div className="alert alert-primary col-11" role="alert">
                    {resposta1}
                </div>
                <div className="alert alert-primary col-11" role="alert">
                    {resposta2}
                </div>                
            </div>
        );   
    }

}