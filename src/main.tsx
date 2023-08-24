import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import './styles/index.scss'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'

import { createRoot } from 'react-dom/client'

import { App } from './App.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
