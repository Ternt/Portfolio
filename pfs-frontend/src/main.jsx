import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

/* routes */
import Home from './routes/home.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
