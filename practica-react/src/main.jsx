import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from './components/general/Button'
import "./resources/css/output.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>hola mundo</h1>
    <Button />
    <Button texto='clickea'/>
  </StrictMode>,
)
