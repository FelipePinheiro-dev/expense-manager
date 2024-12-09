import { combineReducers } from '@reduxjs/toolkit'
import { transactionsReducer } from './slices/transactionsSlice'
import { alertSnackbarReducer } from './slices/alertSnackbarSlice'

export const rootReducer = combineReducers({
    transactions: transactionsReducer,
    alertSnackbar: alertSnackbarReducer
})

