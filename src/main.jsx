import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Usercontext from './context/Usercontext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Usercontext>
    <App />
  </Usercontext>,
)
