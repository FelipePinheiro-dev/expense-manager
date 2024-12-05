import { combineReducers } from '@reduxjs/toolkit'
import { transactionsReducer } from './slices/transactionsSlice'

export const rootReducer = combineReducers({
    transactions: transactionsReducer
})

