import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MyAuthProvider } from './context/Auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyAuthProvider>
      <App />

    </MyAuthProvider>
  </React.StrictMode>,
)