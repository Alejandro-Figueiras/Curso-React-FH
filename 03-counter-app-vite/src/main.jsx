import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloWorldApp from './HelloWorldApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorldApp />
  </StrictMode>,
)
