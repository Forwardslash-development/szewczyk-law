import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './i18n/config'
import './index.css'
import App from './App'

const basename = import.meta.env.PROD ? '/szewczyk-law' : '/'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
