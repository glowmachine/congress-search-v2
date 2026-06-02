import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StoreProvider } from 'easy-peasy'
import store from './store/index.js'
import App from './App.jsx'
import './css/index.css'

createRoot(document.getElementById('root')).render(
  <StoreProvider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </StoreProvider>,
)
