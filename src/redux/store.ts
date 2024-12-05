import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './rootReducer'
import {
    persistStore,
    persistReducer,
    FLUSH,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    PAUSE
} from 'redux-persist'

const persistConfig = {
    key: '@expanse-manager:root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE, PERSIST]
            }
        })
    },
)

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch