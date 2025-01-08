import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider, CssBaseline } from '@mui/material'
import { NotificationsProvider } from '@toolpad/core/useNotifications'
import { theme } from './styles/theme.ts'
import { AppRoutes } from './routes/AppRoutes.tsx'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from './redux/store.ts'
import { persistor } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PersistGate persistor={persistor}>
          <NotificationsProvider>
            <AppRoutes/>
          </NotificationsProvider>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
