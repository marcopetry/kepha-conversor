import React from 'react'
import './Cabecalho.css'
import logo from '../../assets/logoPart1.png'

export default function Cabecalho() {
    return (
        <div className="col-12 col-md-6 m-auto cabecalho-container">
            <img id="logo" src={logo} className="img-fluid" alt="logo-conversor"/> 
            <h1 id="kepha-conversor">Kepha Conversor</h1>
        </div>
        
    );
}

