import { OutletDefaultContainer } from './styles'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import { Filters } from '../../components/Filters'
import { MUISnackbar } from '../../components/MUISnackbar'
import { useEffect } from 'react'
import { fetchTransactions } from '../../redux/slices/transactionsSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'

export function OutletDefault() {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [dispatch])

    return (
        <OutletDefaultContainer>
            <Sidebar/>
            <div className='main'>
                <Filters/>
                <Outlet/>
            </div>
            <MUISnackbar/>
        </OutletDefaultContainer>
    )
}