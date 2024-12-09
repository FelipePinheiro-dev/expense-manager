import { 
    DashboardContainer, 
    TotalCard, MiddleContentStyles, 
    TotalContainerStyles, 
    ChartContainer,
    PieContainer 
} from './styles'

import { ResumeTransactions } from '../../components/ResumeTransactions'
import { BasicPie } from '../../components/BasicPie'
import { BasicBar } from '../../components/BasicBar'
import { BasicHorizontalBar } from '../../components/BasicHorizontalBar'
import { MonetizationOn } from '@mui/icons-material'

import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { addTransactions, PropsTransactions } from '../../redux/slices/transactionsSlice'
import { useEffect } from 'react'
import { useCustomSelector } from '../../hooks/useSelector'

export function Dashboard() {
    const dispatch = useDispatch<AppDispatch>()
    const transactions = useCustomSelector((state) => state.transactions)
    
    function addTransactionToTheLoading(data: PropsTransactions[]) {
        dispatch(addTransactions(data))
    }

    async function fetchTransactions() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()
        addTransactionToTheLoading(data)
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <DashboardContainer>
            <ResumeTransactions/>
            
            <MiddleContentStyles>
                <TotalContainerStyles>
                    <TotalCard>
                    <div>
                        Total Entries
                    </div>
                    
                    <div className='default'>
                        <span><MonetizationOn/></span>
                        <span className='currency'>15.300,00</span>
                    </div>
                    </TotalCard>
                
                    <TotalCard>
                    <div>
                        Total Expenses
                    </div>
                            
                    <div className='default'>
                        <span className='expense'><MonetizationOn/></span>
                        <span className='currency'>1.400,00</span>
                    </div>
                    </TotalCard>
                </TotalContainerStyles>
                <ChartContainer>
                    <BasicBar/>
                    
                    <BasicHorizontalBar/>
                </ChartContainer>
            </MiddleContentStyles>
            
            <PieContainer>
                <BasicPie/>
            </PieContainer>
        </DashboardContainer>
    )
}