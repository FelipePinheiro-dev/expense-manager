import './styles/global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from '@mui/material'
import theme from './styles/theme.ts'
import { AppRoutes } from './routes/AppRoutes.tsx'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from './redux/store.ts'
import { persistor } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppRoutes/>
          </PersistGate>
        </Provider>
    </ThemeProvider>
  </StrictMode>,
)
