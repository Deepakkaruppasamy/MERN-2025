import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import App from './App.jsx'
import Context from './hooks/Context.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Router>
      <Context>
      <App/>
      </Context>
    </Router>
  </StrictMode>,
)
