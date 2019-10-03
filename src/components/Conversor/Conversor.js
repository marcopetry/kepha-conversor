import React, { useState } from 'react'
import './Conversor.css'
import Resposta from '../Resposta/Resposta'

export default function Conversor (){
    const [entrada, setEntrada] = useState(''),
        [unidadeMedida, setUnidade] = useState('');

    return(
        <div className="col-10 col-md-6 conversor-container">
            <h3 className="m-auto">Digite o valor que deseja converter e escolha a unidade:</h3>
            <div className="form-group input-container">                
                <input  className="form-control input-conversor" 
                        type="text" 
                        placeholder="Coloque aqui o valor que deseja converter:"
                        value={entrada}
                        onChange={e => setEntrada(e.target.value)} 
                        />            
            </div>

            <div className="container-input-check">
                <div className="form-check form-check-inline">
                    <input  className="form-check-input" 
                            type="radio" 
                            name="unidade-medida" 
                            id="radio-litro" 
                            value="litro"
                            onChange={e => setUnidade(e.target.value)}
                            />

                    <label className="form-check-label" htmlFor="unidade-litro">Litro</label>
                </div>

                <div className="form-check form-check-inline">
                    <input  className="form-check-input" 
                            type="radio" 
                            name="unidade-medida" 
                            id="radio-metro" 
                            value="metro"
                            onChange={e => setUnidade(e.target.value)}
                            />

                    <label className="form-check-label" htmlFor="unidade-metro">Metro</label>
                </div>

                <div className="form-check form-check-inline">
                    <input  className="form-check-input" 
                            type="radio" 
                            name="unidade-medida" 
                            id="radio-quilo" 
                            value="quilo"
                            onChange={e => setUnidade(e.target.value)}
                            />

                    <label className="form-check-label" htmlFor="unidade-quilo">Quilo</label>
                </div>

                <div className="form-check form-check-inline">
                    <input  className="form-check-input" 
                            type="radio" 
                            name="unidade-medida" 
                            id="radio-graus" 
                            value="graus"
                            onChange={e => setUnidade(e.target.value)}
                            />

                    <label className="form-check-label" htmlFor="inlineRadio3">Graus</label>
                </div>                                                                  
            </div>
            <Resposta unidade={unidadeMedida} entrada={entrada} />
        </div>
                  
    );
}