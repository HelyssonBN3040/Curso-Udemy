import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { HookUseContext } from "../src/components/HookUseContext.jsx" // importação usecONTEXT

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HookUseContext> {/* uso do useContext em toda a aplicação */}
      <App />
    </HookUseContext>
  </React.StrictMode>,
)
