import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../services/api/axios'
import { TypeCategoriesValues } from '../../constants/categories'

export interface PropsCreateTransactions {
    title: string,
    value: number,
    category: TypeCategoriesValues,
    date: string,
    type: 'income' | 'expense'
}

export interface PropsTransactions extends PropsCreateTransactions {
    id: string
}

const initialState = {
    transactions: [] as PropsTransactions[],
    status: 'idle', // idle | loading | succeeded | failed
    error: null as string | null,
}

export const createNewTransaction = createAsyncThunk(
    'transactions/createTransaction',
    async (newTransaction: PropsCreateTransactions, { rejectWithValue }) => {
        try {
            const {title, value, category, date, type} = newTransaction
            const response = await api.post('transactions', {
                title,
                value,
                category,
                date,
                type
            })

            return response.data as PropsTransactions
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchTransactions = createAsyncThunk(
    'transactions/fetchTransactions',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('transactions?_sort=date&_order=desc')
            return response.data as PropsTransactions[]
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.fulfilled, (state, action: PayloadAction<PropsTransactions[]>) => {
                state.transactions = action.payload
            })

            .addCase(createNewTransaction.fulfilled, (state, action: PayloadAction<PropsTransactions>) => {
                state.transactions.unshift(action.payload)
            })
    }
})

export const transactionsReducer = transactionsSlice.reducer