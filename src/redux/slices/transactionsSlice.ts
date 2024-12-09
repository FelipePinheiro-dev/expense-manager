import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
        addTransactions(state, action: PayloadAction<PropsTransactions[]>) {
            state = action.payload
        }
    }
})

export const { addTransactions } = transactionsSlice.actions
export const transactionsReducer = transactionsSlice.reducer