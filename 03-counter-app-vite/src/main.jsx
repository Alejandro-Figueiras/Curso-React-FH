import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloWorldApp from './HelloWorldApp.jsx'
import './index.css'
import CounterApp from './CounterApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorldApp />
    <CounterApp value={10} />
  </StrictMode>,
)
