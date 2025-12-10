import { StrictMode } from 'react'
import React from 'react'
import { Analytics } from "@vercel/analytics/next"
import { createRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import './index.css'
import App from './App.jsx'
import BackToTop from './components/ui/BackToTop.jsx'

// Initialize Vercel Web Analytics
inject()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackToTop />
    <App />
  </StrictMode>,
)
