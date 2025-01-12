import { OutletDefaultContainer, BoxContainer } from './styles'
import { Sidebar } from '@/components/Sidebar'
import { Filters } from '@/components/Filters'

import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

import { fetchTransactions } from '@/redux/slices/transactionsSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'

export function OutletDefault() {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchTransactions())
    }, [dispatch])

    return (
        <OutletDefaultContainer>
            <Sidebar/>
            <BoxContainer>
                <Filters/>
                <Outlet/>
            </BoxContainer>
        </OutletDefaultContainer>
    )
}