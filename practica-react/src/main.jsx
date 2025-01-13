import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from './components/general/Button'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>hola mundo</h1>
    <Button />
    <Button texto='clickea'/>
  </StrictMode>,
)
