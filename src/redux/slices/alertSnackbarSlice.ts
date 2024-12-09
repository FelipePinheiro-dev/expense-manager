import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PropsAlertSnackbar {
    messageAlert: string,
    open: boolean,
    severity?: 'success' | 'error' | 'info' | 'warning'
    variant?: 'filled' | 'outlined' | 'standard',
}

const initialState: PropsAlertSnackbar = {
    open: false,
    messageAlert: '',
}

const alertSnackbarSlice = createSlice({
    name: 'alertSnackbar',
    initialState,
    reducers: {
        showAlertSnackbar: 
            (state, action: PayloadAction<{ 
                        messageAlert: string; 
                        severity: 'success' | 'error' | 'info' | 'warning',
                        variant: 'filled' | 'outlined' | 'standard'
                    }>
            ) =>
            {
              state.open = true
              state.messageAlert = action.payload.messageAlert ?? ''
              state.severity = action.payload.severity ?? 'success'
              state.variant = action.payload.variant ?? 'filled'
            },

        closeAlertSnackbar: (state) => {
            state.open = false
        }
    }
})

export const { showAlertSnackbar, closeAlertSnackbar } = alertSnackbarSlice.actions
export const alertSnackbarReducer = alertSnackbarSlice.reducer
