import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'

import storage from 'redux-persist/lib/storage'
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
    storage,
    blacklist: ['transactions'] // add to ignore save local storage
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