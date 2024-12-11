import { ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material'

import { 
    DashboardContainer, 
    TotalCard,
    Content,
    ChartContainer,
    TotalContainerStyles,
} from './styles'

import { ResumeTransactions } from './components/ResumeTransactions'
import { BasicPie } from './components/BasicPie'
import { BasicBar } from './components/BasicBar'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { formatCurrency } from '../../formats/formatCurrency'

export function Dashboard() {
    const { transactions } = useSelector((state: RootState) => state.transactions)
    
    const accumulator = transactions.reduce((acc, item) => {
        if(item.type === 'income') {
            acc.totIncome += item.value
        } else {
            acc.totExpense += item.value
        }

        return acc
    }, { totIncome: 0, totExpense: 0})

    return (
        <DashboardContainer>
            <ResumeTransactions/>
            
            <Content>
                <TotalContainerStyles>
                    <TotalCard variant='blue'>
                        <div>
                            Total Incomes
                        </div>
                        
                        <span className='currency'>
                            <ArrowCircleUp/>
                            {formatCurrency.format(accumulator.totIncome)}
                        </span>
                    </TotalCard>
                
                    <TotalCard variant='red'>
                        <div>
                            Total Expenses
                        </div>
                                
                        <span className='currency'>
                            <ArrowCircleDown/>
                            {formatCurrency.format(accumulator.totExpense)}
                        </span>
                    </TotalCard>
                </TotalContainerStyles>

                <ChartContainer>
                    <BasicPie/>
                    <BasicBar/>
                </ChartContainer>
            </Content>
        </DashboardContainer>
    )
}