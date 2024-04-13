import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EmployeeContext from './context/EmployeeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <EmployeeContext>
    <App />
  </EmployeeContext>,
)
