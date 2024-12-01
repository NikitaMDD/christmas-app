import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'

const rootElement = document.getElementById('root');
const createRootElement = createRoot(rootElement);

createRootElement.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
