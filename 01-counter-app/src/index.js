import React from 'react'
//import ReactDOM from 'react-dom'
import ReactDOMClient from 'react-dom/client'
import PrimeraApp from './PrimeraApp'
import './index.css';

const divRoot = document.querySelector('#root')

// Nuevo After React18
const root = ReactDOMClient.createRoot(divRoot); // createRoot(container!) if you use TypeScript
root.render(<PrimeraApp />);