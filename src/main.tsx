import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from './styles/theme.ts'
import { GlobalCss } from './styles/globalStyles.tsx'

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
          <CssBaseline/>
          <GlobalCss/>
          <NotificationsProvider>
            <AppRoutes/>
          </NotificationsProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
)
