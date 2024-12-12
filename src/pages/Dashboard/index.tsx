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
import { formatCurrency } from '../../formats/formatCurrency'
import { useTotais } from '../../hooks/useTotais'

export function Dashboard() {
    const accumulator = useTotais()

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