import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "./css/styles.css"
// import './index.css'
// import App from '../vite-project/src/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 