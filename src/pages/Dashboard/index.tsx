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
            
            <MiddleContentStyles>
                <TotalContainerStyles>
                    <TotalCard>
                        <div>
                            Total Incomes
                        </div>
                        
                        <span className='currency'>+ {formatCurrency.format(accumulator.totIncome)}</span>
                    </TotalCard>
                
                    <TotalCard>
                        <div>
                            Total Expenses
                        </div>
                                
                        <span className='currency'>- {formatCurrency.format(accumulator.totExpense)}</span>
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