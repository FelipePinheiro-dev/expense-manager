import { OutletDefaultContainer } from './styles'
import { Sidebar } from '@/components/Sidebar'

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
      <Sidebar />
      <Outlet />
    </OutletDefaultContainer>
  )
}
