import { Snackbar, Alert, AlertProps } from '@mui/material'
import { forwardRef, SyntheticEvent } from 'react'
import { useCustomSelector } from '../../hooks/useSelector'
import { useDispatch } from 'react-redux'
import { closeAlertSnackbar } from '../../redux/slices/alertSnackbarSlice'

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props}/>
    }
)

export function MUISnackbar() {
    const dispatch = useDispatch()
    const stateAlertSnackbar = useCustomSelector((state) => state.alertSnackbar)

    const handleClose = (
        event?: SyntheticEvent | Event,
        reason?: string
    ) => {
        event?.preventDefault()
        
        if(reason === 'clickaway') {
            return
        }

        dispatch(closeAlertSnackbar())
    }

    return (
        <>
            <Snackbar 
                open={stateAlertSnackbar.open} 
                autoHideDuration={3000} 
                onClose={handleClose}
                anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'bottom'
                }}
            >
                <SnackbarAlert 
                    onClose={handleClose} 
                    severity={stateAlertSnackbar.severity}
                    variant={stateAlertSnackbar.variant}    
                >
                    {stateAlertSnackbar.messageAlert}
                </SnackbarAlert>
            </Snackbar>
        </>
    )
}