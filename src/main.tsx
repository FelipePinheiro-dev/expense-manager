import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from '@mui/material'
import { theme } from './styles/theme.ts'
import { GlobalStyles } from './styles/GlobalStyles.tsx'

import { NotificationsProvider } from '@toolpad/core/useNotifications'

import { AppRoutes } from './routes/AppRoutes.tsx'

import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <NotificationsProvider>
            <AppRoutes />
          </NotificationsProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
