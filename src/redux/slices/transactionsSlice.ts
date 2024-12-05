import { createSlice } from '@reduxjs/toolkit'
import { TypeCategory } from '../../constants/categories'

export interface PropsTransactions {
    title: string,
    date: Date,
    type: 'Entries' | 'Expense'
    category: TypeCategory,
    value: number
}

const initialState: PropsTransactions[] = []

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addNewTransaction(state, action) {
            console.log(state)
            console.log(action)
        }
    }
})

export const { addNewTransaction } = transactionsSlice.actions
export const transactionsReducer = transactionsSlice.reducer