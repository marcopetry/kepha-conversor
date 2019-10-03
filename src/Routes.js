import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Conversor from './components/Conversor/Conversor'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Conversor}/>            
        </BrowserRouter>
    );
}

