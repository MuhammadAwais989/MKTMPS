import { StrictMode } from 'react'
import React from 'react'
import { Analytics } from "@vercel/analytics/react"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BackToTop from './components/ui/BackToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackToTop />
    <App />
  </StrictMode>,
)
