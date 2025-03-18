import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'  // Make sure this is correctly imported
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
