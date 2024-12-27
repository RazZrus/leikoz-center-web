import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from './assets/global-styles.ts'

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <GlobalStyles />
  </>
)
