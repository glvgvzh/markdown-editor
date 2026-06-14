import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const savedTheme = localStorage.getItem('theme') || 'sakura'
document.body.className = `theme-${savedTheme}`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
