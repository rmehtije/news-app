import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './services/stateService';
import { BrowserRouter } from 'react-router-dom';
// document.getElementById : berjot html element s id root iz DOM (Document Object Model).
// DOM eta vsja struktura html v js objekte
// DOM hranitsja v glabol'noj peremennyj kotoraja nazqvajetsa 'document'

// ReactDOM eta vspomogatel'nyj paket Reacta dlja vzaimodejstvija s obqchnqm DOM
// createRoot sozdajot glavnuju direktoriju gde budet zapuskatsja vsjo nashe prilozhenije
const root = ReactDOM.createRoot(document.getElementById('root'));
// render = eta funkcija otrisovki react komponentov. 
// Otrisovka znachit obrabotka komponenta i perevodit iz JSX ili React element v 4istqj DOM
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
