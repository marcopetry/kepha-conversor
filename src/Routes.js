import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Conversor from './components/Conversor/Conversor'
import Cabecalho from './components/Cabecalho/Cabecalho'

export default function Routes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Route path="/" exact component={Conversor}/>            
        </BrowserRouter>
    );
}

